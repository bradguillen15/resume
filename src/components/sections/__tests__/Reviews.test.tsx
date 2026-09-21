import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Reviews } from '../Reviews';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('@/hooks/useReviews');
vi.mock('@/hooks/useReviewForm');
vi.mock('@/hooks/useMediaQuery', () => ({
  useMediaQuery: vi.fn(() => false),
}));

import { useReviews } from '@/hooks/useReviews';
import { useReviewForm, type ReviewSubmitStatus } from '@/hooks/useReviewForm';

const useReviewsMock = vi.mocked(useReviews);
const useReviewFormMock = vi.mocked(useReviewForm);

function makeFormStub(options?: {
  submitStatus?: ReviewSubmitStatus;
  errorMessage?: string;
}): ReturnType<typeof useReviewForm> {
  const submitStatus = options?.submitStatus ?? 'idle';
  const errorMessage = options?.errorMessage ?? '';

  return {
    form: {
      handleSubmit: vi.fn(),
      Field: ({
        children,
      }: {
        name: string;
        children: (field: {
          state: { value: string };
          handleChange: (value: string) => void;
        }) => React.ReactNode;
      }) =>
        children({
          state: { value: '' },
          handleChange: vi.fn(),
        }),
    },
    submitStatus,
    errorMessage,
  } as unknown as ReturnType<typeof useReviewForm>;
}

beforeEach(() => {
  useReviewFormMock.mockReturnValue(makeFormStub());
  class MockResizeObserver {
    observe = vi.fn();
    disconnect = vi.fn();
  }
  vi.stubGlobal('ResizeObserver', MockResizeObserver);
});

describe('Reviews', () => {
  it('shows a loading state while reviews fetch', () => {
    useReviewsMock.mockReturnValue({ reviews: [], loading: true });

    render(<Reviews />);

    expect(screen.getByText('Loading reviews...')).toBeInTheDocument();
  });

  it('shows an empty state when there are no reviews', () => {
    useReviewsMock.mockReturnValue({ reviews: [], loading: false });

    render(<Reviews />);

    expect(screen.getByText(/no reviews yet/i)).toBeInTheDocument();
  });

  it('renders review cards with LinkedIn links when provided', () => {
    useReviewsMock.mockReturnValue({
      loading: false,
      reviews: [
        {
          id: 'r1',
          name: 'Alex Doe',
          role: 'Engineer',
          message: 'Great collaborator on hard problems.',
          date: 'Jan 2025',
          linkedInUrl: 'https://linkedin.com/in/alexdoe',
        },
      ],
    });

    render(<Reviews />);

    expect(screen.getByText(/great collaborator/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /alex doe on linkedin/i })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/alexdoe',
    );
  });

  it('renders the review form fields and submit button', () => {
    useReviewsMock.mockReturnValue({ reviews: [], loading: false });

    render(<Reviews />);

    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Role / Company')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('LinkedIn profile URL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your review...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit review/i })).toBeInTheDocument();
  });

  it('shows success copy after a successful submit', () => {
    useReviewsMock.mockReturnValue({ reviews: [], loading: false });
    useReviewFormMock.mockReturnValue(makeFormStub({ submitStatus: 'success' }));

    render(<Reviews />);

    expect(screen.getByText(/thanks! your review is pending approval/i)).toBeInTheDocument();
  });

  it('shows form error messages from useReviewForm', () => {
    useReviewsMock.mockReturnValue({ reviews: [], loading: false });
    useReviewFormMock.mockReturnValue(
      makeFormStub({
        submitStatus: 'error',
        errorMessage: 'Could not submit your review. Try again.',
      }),
    );

    render(<Reviews />);

    expect(
      screen.getByText('Could not submit your review. Try again.'),
    ).toBeInTheDocument();
  });

  it('disables submit while sending', () => {
    useReviewsMock.mockReturnValue({ reviews: [], loading: false });
    useReviewFormMock.mockReturnValue(makeFormStub({ submitStatus: 'sending' }));

    render(<Reviews />);

    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();
  });
});
