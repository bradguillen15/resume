import { describe, it, expect, vi, beforeEach } from 'vitest';

const getDocsMock = vi.fn();

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(() => 'reviews-collection'),
  query: vi.fn((...args: unknown[]) => args),
  where: vi.fn(),
  orderBy: vi.fn(),
  limit: vi.fn(),
  getDocs: (...args: unknown[]) => getDocsMock(...args),
  Timestamp: {
    prototype: {
      toMillis(this: { millis: number }) {
        return this.millis;
      },
    },
  },
}));

vi.mock('@/lib/firebase', () => ({ db: {} }));

import { getApprovedReviews } from '../reviews';

beforeEach(() => {
  getDocsMock.mockReset();
});

describe('getApprovedReviews', () => {
  it('maps approved review documents', async () => {
    getDocsMock.mockResolvedValue({
      docs: [
        {
          id: 'r1',
          data: () => ({
            name: 'Alex',
            role: 'Engineer',
            message: 'Great collaborator',
            date: 'Jan 2025',
            linkedInUrl: 'https://linkedin.com/in/alex',
          }),
        },
      ],
    });

    const reviews = await getApprovedReviews();
    expect(reviews).toEqual([
      {
        id: 'r1',
        name: 'Alex',
        role: 'Engineer',
        message: 'Great collaborator',
        date: 'Jan 2025',
        linkedInUrl: 'https://linkedin.com/in/alex',
      },
    ]);
  });

  it('derives date from createdAt when date is missing', async () => {
    const millis = new Date('2024-06-15').getTime();
    getDocsMock.mockResolvedValue({
      docs: [
        {
          id: 'r2',
          data: () => ({
            name: 'Sam',
            role: 'PM',
            message: 'Solid partner',
            createdAt: { toMillis: () => millis },
          }),
        },
      ],
    });

    const reviews = await getApprovedReviews();
    expect(reviews[0]?.date).toBe(
      new Date(millis).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      }),
    );
  });

  it('returns an empty list when Firestore fails', async () => {
    getDocsMock.mockRejectedValue(new Error('offline'));
    await expect(getApprovedReviews()).resolves.toEqual([]);
  });
});
