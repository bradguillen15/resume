import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  Timestamp,
} from 'firebase/firestore';
import { Plus, X } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { db, submitReviewFn } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { cn } from '@/lib/utils';

interface Review {
  id: string;
  name: string;
  role: string;
  message: string;
  date: string;
  linkedInUrl: string;
}

const inputClasses =
  'w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary text-[13px] font-mono outline-none transition-colors duration-200 focus:border-accent placeholder:text-text-muted';

const REVIEWS_LIMIT = 50;

const REVIEW_EASE = [0.22, 1, 0.36, 1] as const;

const iconTransition = { duration: 0.24, ease: [0.4, 0, 0.2, 1] as const };

function parseLinkedInUrl(input: string): string | null {
  const t = input.trim();
  if (!t) return null;
  let url: URL;
  try {
    url = new URL(t.startsWith('http') ? t : `https://${t}`);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, '').toLowerCase();
  if (host !== 'linkedin.com' && !host.endsWith('.linkedin.com')) {
    return null;
  }
  return url.href;
}

function ReviewMetaRow(props: {
  name: string;
  role: string;
  date: string;
  linkedInUrl: string;
}) {
  const { name, role, date, linkedInUrl } = props;
  return (
    <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-1">
      <div className="min-w-0 flex-1">
        <div className="flex min-h-5 items-center min-w-0">
          {linkedInUrl ? (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${name} — LinkedIn`}
              aria-label={`${name} on LinkedIn`}
              className={cn(
                'flex min-w-0 max-w-full items-center gap-2 rounded-sm text-accent underline-offset-2',
                'text-l font-medium leading-none tracking-tight',
                'transition-colors hover:text-accent/90 hover:underline',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              )}
              onClick={e => e.stopPropagation()}
            >
              <span>{name}</span>
              <LinkedInIcon className="size-4 shrink-0" />
            </a>
          ) : (
            <p className="min-w-0 truncate text-xl font-medium leading-none tracking-tight text-text-primary">
              {name}
            </p>
          )}
        </div>
        {role ? (
          <p className="text-text-muted text-[12px] leading-[1.5] truncate">
            {role}
          </p>
        ) : null}
      </div>
      <span className="text-text-muted text-[12px] shrink-0">{date}</span>
    </div>
  );
}

function ReviewCard(props: { review: Review; index: number }) {
  const { review, index } = props;
  const body = review.message.trim();
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const [quoteHeight, setQuoteHeight] = useState<number | null>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = pRef.current;
    if (!el) return;

    const sync = () => {
      if (expanded) {
        setCanExpand(true);
        setQuoteHeight(el.scrollHeight);
        return;
      }
      const overflows = el.scrollHeight > el.clientHeight + 1;
      setCanExpand(overflows);
      setQuoteHeight(overflows ? el.offsetHeight : null);
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [body, expanded]);

  const handleCardClick = () => {
    if (!canExpand) return;
    if (typeof window !== 'undefined' && window.getSelection()?.toString())
      return;
    setExpanded(v => !v);
  };

  const metaBlock = (
    <div className="mb-4 pb-4 border-b border-border/40">
      <ReviewMetaRow
        name={review.name}
        role={review.role}
        date={review.date}
        linkedInUrl={review.linkedInUrl}
      />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Card
        className={cn(
          'relative border-border bg-bg-secondary transition-colors duration-200 hover:border-border-strong',
          canExpand && 'cursor-pointer',
        )}
        onClick={handleCardClick}
      >
        {canExpand ? (
          <div
            className="pointer-events-none absolute top-4 right-4 z-[1] flex h-5 w-5 items-center justify-center text-accent"
            aria-hidden
          >
            <AnimatePresence mode="wait" initial={false}>
              {expanded ? (
                <motion.div
                  key="close"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={iconTransition}
                >
                  <X className="size-5 stroke-[2.5]" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={iconTransition}
                >
                  <Plus className="size-5 stroke-[2.5]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : null}
        <CardContent className={cn('px-6 py-5', canExpand && 'pr-12')}>
          {metaBlock}
          <motion.div
            initial={false}
            animate={{
              height: quoteHeight === null ? 'auto' : quoteHeight,
            }}
            style={{ overflow: canExpand ? 'hidden' : 'visible' }}
            transition={{
              duration: canExpand ? 0.4 : 0,
              ease: REVIEW_EASE,
            }}
          >
            <p
              ref={pRef}
              className={cn(
                'text-text-secondary text-[13px] leading-[1.7] italic text-pretty',
                !expanded && 'line-clamp-2',
              )}
            >
              "{body}"
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [linkedInInput, setLinkedInInput] = useState('');
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formColumnRef = useRef<HTMLDivElement>(null);
  const [reviewsMaxHeightPx, setReviewsMaxHeightPx] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const q = query(
          collection(db, 'reviews'),
          where('status', '==', 'approved'),
          orderBy('createdAt', 'desc'),
          limit(REVIEWS_LIMIT),
        );
        const snap = await getDocs(q);
        const list: Review[] = snap.docs.map(doc => {
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
        setReviews(list);
      } catch {
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };
    loadReviews();
  }, []);

  useEffect(() => {
    const el = formColumnRef.current;
    if (!el) return;

    const syncHeight = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        setReviewsMaxHeightPx(el.getBoundingClientRect().height);
      } else {
        setReviewsMaxHeightPx(undefined);
      }
    };

    const ro = new ResizeObserver(() => syncHeight());
    ro.observe(el);
    window.addEventListener('resize', syncHeight);
    syncHeight();
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncHeight);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !email.trim() ||
      !role.trim() ||
      !message.trim() ||
      !linkedInInput.trim()
    )
      return;

    const linkedNormalized = parseLinkedInUrl(linkedInInput);
    if (!linkedNormalized) {
      setSubmitStatus('error');
      setErrorMessage(
        'Enter a valid LinkedIn profile URL (e.g. linkedin.com/in/your-profile).',
      );
      return;
    }

    setSubmitStatus('sending');
    setErrorMessage('');
    try {
      await submitReviewFn({
        name: name.trim(),
        email: email.trim(),
        role: role.trim(),
        message: message.trim(),
        linkedInUrl: linkedNormalized,
      });
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setRole('');
      setMessage('');
      setLinkedInInput('');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (err: unknown) {
      setSubmitStatus('error');
      const msg =
        err && typeof err === 'object' && 'message' in err
          ? String((err as { message: unknown }).message)
          : '';
      if (msg.includes('Demasiados')) {
        setErrorMessage('Demasiados envíos. Intenta de nuevo en 1 hora.');
      } else {
        setErrorMessage('No se pudo enviar. Intenta de nuevo.');
      }
    }
  };

  return (
    <section id="reviews" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[120px]">
      <SectionLabel number="05" label="Reviews" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Form column */}
        <div ref={formColumnRef}>
          <h2 className="font-display text-[26px] sm:text-[28px] font-semibold leading-[1.2] mb-3 text-text-primary">
            Leave a <span className="text-accent">review</span>
          </h2>
          <p className="text-text-secondary text-[13px] leading-[1.8] mb-6">
            Worked with me? Leave a short comment and your LinkedIn profile URL
            so visitors can verify your recommendation.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className={inputClasses}
            />
            <input
              placeholder="Role / Company"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
              className={inputClasses}
            />
            <input
              type="url"
              placeholder="LinkedIn profile URL"
              value={linkedInInput}
              onChange={e => setLinkedInInput(e.target.value)}
              required
              className={inputClasses}
            />
            <textarea
              placeholder="Your review..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows={4}
              className={`${inputClasses} resize-y`}
            />
            <Button
              type="submit"
              disabled={submitStatus === 'sending'}
              className="bg-accent text-[#0A0A0F] hover:bg-accent/90 font-mono text-[13px] tracking-[0.04em] cursor-pointer w-full sm:w-auto"
            >
              {submitStatus === 'sending' ? 'Sending...' : 'Submit review →'}
            </Button>
            {submitStatus === 'success' && (
              <p className="text-accent text-[12px]">
                Thanks! Your review is pending approval.
              </p>
            )}
            {submitStatus === 'error' && errorMessage && (
              <p className="text-[#f87171] text-[12px]">{errorMessage}</p>
            )}
          </form>
        </div>

        {/* Reviews column */}
        <div
          className={
            reviewsMaxHeightPx != null
              ? 'flex flex-col gap-4 overflow-y-auto overscroll-contain pr-1 min-h-0 [scrollbar-gutter:stable]'
              : 'flex flex-col gap-4 overflow-y-auto overscroll-contain pr-1 min-h-0 max-h-[min(70vh,28rem)] [scrollbar-gutter:stable] lg:max-h-none'
          }
          style={
            reviewsMaxHeightPx != null
              ? { maxHeight: reviewsMaxHeightPx }
              : undefined
          }
        >
          {loading ? (
            <Card className="border-border bg-bg-secondary shrink-0">
              <CardContent className="px-6 py-10 text-center">
                <p className="text-text-muted text-[13px]">
                  Loading reviews...
                </p>
              </CardContent>
            </Card>
          ) : reviews.length === 0 ? (
            <Card className="border-border bg-bg-secondary shrink-0">
              <CardContent className="px-6 py-10 text-center">
                <p className="text-text-muted text-[13px] leading-[1.7]">
                  No reviews yet. Be the first to leave one!
                </p>
              </CardContent>
            </Card>
          ) : (
            reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
