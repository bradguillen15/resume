import { useForm } from '@tanstack/react-form';
import { useEffect, useRef, useState } from 'react';
import { submitReviewFn } from '@/lib/firebase';
import { getSubmitErrorMessage } from '@/lib/functionsErrors';
import { parseLinkedInUrl } from '@/lib/parseLinkedInUrl';

export type ReviewSubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export function useReviewForm() {
  const [submitStatus, setSubmitStatus] = useState<ReviewSubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimerRef.current !== null) clearTimeout(successTimerRef.current);
    };
  }, []);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      role: '',
      message: '',
      linkedInInput: '',
    },
    onSubmit: async ({ value }) => {
      if (
        !value.name.trim() ||
        !value.email.trim() ||
        !value.role.trim() ||
        !value.message.trim() ||
        !value.linkedInInput.trim()
      ) {
        return;
      }

      const linkedNormalized = parseLinkedInUrl(value.linkedInInput);
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
          name: value.name.trim(),
          email: value.email.trim(),
          role: value.role.trim(),
          message: value.message.trim(),
          linkedInUrl: linkedNormalized,
        });
        setSubmitStatus('success');
        form.reset();
        if (successTimerRef.current !== null) clearTimeout(successTimerRef.current);
        successTimerRef.current = setTimeout(() => setSubmitStatus('idle'), 4000);
      } catch (err: unknown) {
        setSubmitStatus('error');
        setErrorMessage(
          getSubmitErrorMessage(err, 'Could not submit your review. Try again.'),
        );
      }
    },
  });

  return { form, submitStatus, errorMessage };
}
