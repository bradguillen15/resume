import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Review {
  id: string;
  name: string;
  role: string;
  message: string;
  date: string;
  linkedInUrl: string;
}

const REVIEWS_LIMIT = 50;

export async function getApprovedReviews(): Promise<Review[]> {
  try {
    const q = query(
      collection(db, 'reviews'),
      where('status', '==', 'approved'),
      orderBy('createdAt', 'desc'),
      limit(REVIEWS_LIMIT),
    );
    const snap = await getDocs(q);
    return snap.docs.map(doc => {
      const d = doc.data();
      const createdAt = d.createdAt as Timestamp | undefined;
      return {
        id: doc.id,
        name: d.name ?? '',
        role: d.role ?? '',
        message: d.message ?? '',
        date:
          d.date ??
          (createdAt
            ? new Date(createdAt.toMillis()).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })
            : ''),
        linkedInUrl: typeof d.linkedInUrl === 'string' ? d.linkedInUrl : '',
      };
    });
  } catch {
    return [];
  }
}
