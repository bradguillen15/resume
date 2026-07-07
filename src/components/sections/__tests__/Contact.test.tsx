import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Contact } from '../Contact';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

vi.mock('@/lib/firebase', () => ({
  sendContactEmailFn: vi.fn(),
}));

import { sendContactEmailFn } from '@/lib/firebase';

const sendContactEmailFnMock = vi.mocked(sendContactEmailFn);

beforeEach(() => {
  sendContactEmailFnMock.mockReset();
});

describe('Contact', () => {
  it('shows success after a successful submit', async () => {
    sendContactEmailFnMock.mockResolvedValue({ data: { success: true } });
    const user = userEvent.setup();

    render(<Contact />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Alex');
    await user.type(screen.getByPlaceholderText('your@email.com'), 'alex@example.com');
    await user.type(screen.getByPlaceholderText('What are you working on?'), 'Hello');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    });
  });

  it('shows English rate-limit copy on resource-exhausted errors', async () => {
    sendContactEmailFnMock.mockRejectedValue({
      code: 'functions/resource-exhausted',
      message: 'Too many requests',
    });
    const user = userEvent.setup();

    render(<Contact />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Alex');
    await user.type(screen.getByPlaceholderText('your@email.com'), 'alex@example.com');
    await user.type(screen.getByPlaceholderText('What are you working on?'), 'Hello');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText('Too many submissions. Try again in an hour.'),
      ).toBeInTheDocument();
    });
  });
});
