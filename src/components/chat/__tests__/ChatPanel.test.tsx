import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ChatPanel } from '../ChatPanel';
import { chatWithBradFn } from '@/lib/firebase';
import type { ChatChunk, ChatResult } from '@/lib/chat';

vi.mock('@/lib/firebase', () => ({
  chatWithBradFn: { stream: vi.fn() },
}));

const streamMock = vi.mocked(chatWithBradFn.stream);

function makeStreamResult(chunks: string[], finalText: string) {
  return {
    stream: (async function* () {
      for (const c of chunks) yield { text: c } as ChatChunk;
    })(),
    data: Promise.resolve({ text: finalText, done: true } as ChatResult),
  };
}

beforeEach(() => {
  streamMock.mockReset();
});

const renderPanel = () =>
  render(<ChatPanel open={true} onOpenChange={() => {}} />);

describe('ChatPanel', () => {
  it('renders suggested question chips when the conversation is empty', () => {
    renderPanel();
    expect(screen.getByText("What's your leadership style?")).toBeInTheDocument();
    expect(screen.getByText('What are your core strengths?')).toBeInTheDocument();
  });

  it('sends a suggested question when its chip is clicked', async () => {
    streamMock.mockResolvedValue(makeStreamResult([], 'I lead by example.'));
    renderPanel();

    await userEvent.click(screen.getByText("What's your leadership style?"));

    await waitFor(() =>
      expect(streamMock).toHaveBeenCalledWith({
        messages: [{ role: 'user', content: "What's your leadership style?" }],
      }),
    );
    // Reply appears twice: chat bubble + aria-live announcement region
    expect(await screen.findAllByText('I lead by example.')).not.toHaveLength(0);
  });

  it('sends the typed message on Enter and disables input while streaming', async () => {
    let releaseStream: () => void = () => {};
    const gate = new Promise<void>((resolve) => {
      releaseStream = resolve;
    });
    streamMock.mockImplementation(async () => {
      await gate;
      return makeStreamResult([], 'done');
    });
    renderPanel();

    const input = screen.getByLabelText('Message AI Brad');
    await userEvent.type(input, 'Tell me about KW{Enter}');

    expect(screen.getByText('Tell me about KW')).toBeInTheDocument();
    expect(input).toBeDisabled();

    releaseStream();
    await waitFor(() => expect(input).not.toBeDisabled());
  });

  it('shows an error row with retry when the request fails', async () => {
    streamMock.mockRejectedValue({ code: 'functions/resource-exhausted' });
    renderPanel();

    const input = screen.getByLabelText('Message AI Brad');
    await userEvent.type(input, 'Hi{Enter}');

    expect(await screen.findByText(/rate limit/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(input).not.toBeDisabled();
  });

  it('shows the daily cap message when the server reports it', async () => {
    streamMock.mockRejectedValue({
      code: 'functions/resource-exhausted',
      message: 'Daily chat limit reached. Please try again tomorrow.',
    });
    renderPanel();

    await userEvent.click(screen.getByText("What's your leadership style?"));

    expect(
      await screen.findByText('Daily chat limit reached. Please try again tomorrow.'),
    ).toBeInTheDocument();
    expect(screen.queryByText(/^I lead/)).not.toBeInTheDocument();
  });

  it('renders assistant text incrementally while chunks stream in', async () => {
    let releaseSecondChunk: () => void = () => {};
    const secondChunkGate = new Promise<void>((resolve) => {
      releaseSecondChunk = resolve;
    });

    streamMock.mockResolvedValue({
      stream: (async function* () {
        yield { text: 'I lead ' } as ChatChunk;
        await secondChunkGate;
        yield { text: 'by example.' } as ChatChunk;
      })(),
      data: new Promise((resolve) => {
        setTimeout(
          () => resolve({ text: 'I lead by example.', done: true } as ChatResult),
          200
        );
      }),
    });
    renderPanel();

    await userEvent.click(screen.getByText("What's your leadership style?"));

    await waitFor(() => {
      expect(screen.getByText(/^I lead/)).toBeInTheDocument();
    });
    expect(screen.queryByText(/by example/)).not.toBeInTheDocument();

    await act(async () => {
      releaseSecondChunk();
    });
    await waitFor(() =>
      expect(screen.getAllByText('I lead by example.').length).toBeGreaterThan(0)
    );
  });
});
