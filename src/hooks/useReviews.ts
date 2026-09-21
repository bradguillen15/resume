import { useEffect, useState } from 'react';
import { getApprovedReviews, type Review } from '@/lib/reviews';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const list = await getApprovedReviews();
      if (!cancelled) {
        setReviews(list);
        setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { reviews, loading };
}
