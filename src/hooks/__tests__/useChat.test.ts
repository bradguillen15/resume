import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useChat } from '../useChat';
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

describe('useChat', () => {
  it('accumulates streamed chunks and overwrites with the final text', async () => {
    streamMock.mockResolvedValue(
      makeStreamResult(['Hel', 'lo'], 'Hello there!'),
    );
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hi Brad');
    });

    expect(streamMock).toHaveBeenCalledWith({
      messages: [{ role: 'user', content: 'Hi Brad' }],
    });
    expect(result.current.messages).toEqual([
      { role: 'user', content: 'Hi Brad' },
      { role: 'assistant', content: 'Hello there!' },
    ]);
    expect(result.current.status).toBe('idle');
  });

  it('updates assistant content as each chunk arrives', async () => {
    streamMock.mockResolvedValue({
      stream: (async function* () {
        yield { text: 'My ' } as ChatChunk;
        await new Promise((resolve) => setTimeout(resolve, 15));
        yield { text: 'leadership style.' } as ChatChunk;
      })(),
      data: new Promise((resolve) => {
        setTimeout(
          () => resolve({ text: 'My leadership style.', done: true } as ChatResult),
          40
        );
      }),
    });
    const { result } = renderHook(() => useChat());

    await act(async () => {
      void result.current.sendMessage('Leadership?');
    });

    await waitFor(() =>
      expect(result.current.messages.at(-1)?.content).toBe('My ')
    );
    await waitFor(() =>
      expect(result.current.messages.at(-1)?.content).toBe('My leadership style.')
    );
    expect(result.current.status).toBe('idle');
  });

  it('shows final text when the stream fails but data resolves', async () => {
    streamMock.mockResolvedValue({
      stream: {
        [Symbol.asyncIterator]() {
          return {
            next: () => Promise.reject(new Error('non-SSE response')),
          };
        },
      },
      data: Promise.resolve({
        text: 'Answer from final result only.',
        done: true,
      } as ChatResult),
    });
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hello?');
    });

    expect(result.current.messages).toEqual([
      { role: 'user', content: 'Hello?' },
      { role: 'assistant', content: 'Answer from final result only.' },
    ]);
    expect(result.current.status).toBe('idle');
  });

  it('shows final text when the stream yields no chunks', async () => {
    streamMock.mockResolvedValue(makeStreamResult([], 'Only in the final payload.'));
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hello?');
    });

    expect(result.current.messages.at(-1)).toEqual({
      role: 'assistant',
      content: 'Only in the final payload.',
    });
  });

  it('maps resource-exhausted to rate-limit copy and drops the placeholder', async () => {
    streamMock.mockRejectedValue({ code: 'functions/resource-exhausted' });
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hi');
    });

    expect(result.current.status).toBe('error');
    expect(result.current.errorMessage).toMatch(/rate limit/i);
    expect(result.current.messages).toEqual([{ role: 'user', content: 'Hi' }]);
  });

  it('shows the daily cap message from the server', async () => {
    streamMock.mockRejectedValue({
      code: 'functions/resource-exhausted',
      message: 'Daily chat limit reached. Please try again tomorrow.',
    });
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hi');
    });

    expect(result.current.errorMessage).toBe(
      'Daily chat limit reached. Please try again tomorrow.',
    );
  });

  it('shows unavailable errors from the server', async () => {
    streamMock.mockRejectedValue({
      code: 'functions/unavailable',
      message: 'The AI is unavailable right now.',
    });
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hi');
    });

    expect(result.current.errorMessage).toBe('The AI is unavailable right now.');
  });

  it('clears partial assistant text when the request fails', async () => {
    streamMock.mockResolvedValue({
      stream: (async function* () {
        yield { text: 'Partial ' } as ChatChunk;
      })(),
      data: Promise.reject({
        code: 'functions/resource-exhausted',
        message: 'The AI is at capacity right now. Please try again in a bit.',
      }),
    });
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hi');
    });

    await waitFor(() => expect(result.current.status).toBe('error'));
    expect(result.current.messages).toEqual([{ role: 'user', content: 'Hi' }]);
    expect(result.current.errorMessage).toMatch(/at capacity/i);
  });

  it('shows a generic error for other failures', async () => {
    streamMock.mockRejectedValue(new Error('boom'));
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hi');
    });

    expect(result.current.status).toBe('error');
    expect(result.current.errorMessage).toMatch(/something went wrong/i);
  });

  it('caps outgoing history at 12 messages', async () => {
    streamMock.mockImplementation(() =>
      Promise.resolve(makeStreamResult([], 'ok')),
    );
    const { result } = renderHook(() => useChat());

    for (let i = 0; i < 8; i++) {
      await act(async () => {
        await result.current.sendMessage(`message ${i}`);
      });
    }

    const lastCall = streamMock.mock.calls.at(-1)![0] as {
      messages: unknown[];
    };
    expect(lastCall.messages).toHaveLength(12);
    expect(result.current.messages).toHaveLength(16);
  });

  it('ignores empty and over-length input', async () => {
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('   ');
      await result.current.sendMessage('x'.repeat(2001));
    });

    expect(streamMock).not.toHaveBeenCalled();
    expect(result.current.messages).toHaveLength(0);
  });

  it('retry resends the last user message without duplicating it', async () => {
    streamMock.mockRejectedValueOnce(new Error('boom'));
    streamMock.mockResolvedValueOnce(makeStreamResult([], 'recovered'));
    const { result } = renderHook(() => useChat());

    await act(async () => {
      await result.current.sendMessage('Hi');
    });
    expect(result.current.status).toBe('error');

    await act(async () => {
      result.current.retry();
    });

    await waitFor(() => expect(result.current.status).toBe('idle'));
    expect(result.current.messages).toEqual([
      { role: 'user', content: 'Hi' },
      { role: 'assistant', content: 'recovered' },
    ]);
  });
});
