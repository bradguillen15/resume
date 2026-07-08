import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useReviews } from '../useReviews';

vi.mock('@/lib/reviews', () => ({
  getApprovedReviews: vi.fn(),
}));

import { getApprovedReviews } from '@/lib/reviews';

const getApprovedReviewsMock = vi.mocked(getApprovedReviews);

beforeEach(() => {
  getApprovedReviewsMock.mockReset();
});

describe('useReviews', () => {
  it('loads reviews and clears loading state', async () => {
    getApprovedReviewsMock.mockResolvedValue([
      {
        id: 'r1',
        name: 'Alex',
        role: 'Engineer',
        message: 'Great work',
        date: 'Jan 2025',
        linkedInUrl: '',
      },
    ]);

    const { result } = renderHook(() => useReviews());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.reviews).toHaveLength(1);
    expect(result.current.reviews[0]?.name).toBe('Alex');
  });

  it('does not update state after unmount', async () => {
    let resolveReviews: (value: []) => void = () => {};
    getApprovedReviewsMock.mockReturnValue(
      new Promise(resolve => {
        resolveReviews = resolve;
      }),
    );

    const { result, unmount } = renderHook(() => useReviews());
    unmount();
    resolveReviews([]);

    await waitFor(() => {
      expect(getApprovedReviewsMock).toHaveBeenCalled();
    });

    expect(result.current.reviews).toEqual([]);
    expect(result.current.loading).toBe(true);
  });
});
