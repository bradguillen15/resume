import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useReviewForm } from '../useReviewForm';

vi.mock('@/lib/firebase', () => ({
  submitReviewFn: vi.fn(),
}));

import { submitReviewFn } from '@/lib/firebase';

const submitReviewFnMock = vi.mocked(submitReviewFn);

const validValues = {
  name: 'Alex Doe',
  email: 'alex@example.com',
  role: 'Engineer at Acme',
  message: 'Brad is excellent to work with.',
  linkedInInput: 'https://linkedin.com/in/alexdoe',
};

async function submitForm(
  form: ReturnType<typeof useReviewForm>['form'],
  values: typeof validValues = validValues,
) {
  for (const [field, value] of Object.entries(values)) {
    form.setFieldValue(field as keyof typeof validValues, value);
  }
  await act(async () => {
    await form.handleSubmit();
  });
}

beforeEach(() => {
  submitReviewFnMock.mockReset();
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('useReviewForm', () => {
  it('submits a valid review and resets the form', async () => {
    submitReviewFnMock.mockResolvedValue({ data: { success: true } });

    const { result } = renderHook(() => useReviewForm());
    await submitForm(result.current.form);

    expect(submitReviewFnMock).toHaveBeenCalledWith({
      name: 'Alex Doe',
      email: 'alex@example.com',
      role: 'Engineer at Acme',
      message: 'Brad is excellent to work with.',
      linkedInUrl: 'https://linkedin.com/in/alexdoe',
    });
    expect(result.current.submitStatus).toBe('success');
    expect(result.current.form.state.values.name).toBe('');
  });

  it('shows a validation error for an invalid LinkedIn URL', async () => {
    const { result } = renderHook(() => useReviewForm());
    await submitForm(result.current.form, {
      ...validValues,
      linkedInInput: 'not-a-linkedin-url',
    });

    expect(submitReviewFnMock).not.toHaveBeenCalled();
    expect(result.current.submitStatus).toBe('error');
    expect(result.current.errorMessage).toMatch(/valid LinkedIn profile URL/i);
  });

  it('maps rate-limit errors to shared submit copy', async () => {
    submitReviewFnMock.mockRejectedValue({
      code: 'functions/resource-exhausted',
      message: 'Rate limited',
    });

    const { result } = renderHook(() => useReviewForm());
    await submitForm(result.current.form);

    expect(result.current.submitStatus).toBe('error');
    expect(result.current.errorMessage).toBe(
      'Too many submissions. Try again in an hour.',
    );
  });

  it('returns to idle after a successful submit', async () => {
    submitReviewFnMock.mockResolvedValue({ data: { success: true } });

    const { result } = renderHook(() => useReviewForm());
    await submitForm(result.current.form);

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(result.current.submitStatus).toBe('idle');
  });
});
