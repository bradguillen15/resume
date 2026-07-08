import { describe, it, expect } from 'vitest';
import { getSubmitErrorMessage, parseFunctionsError } from '../functionsErrors';

describe('parseFunctionsError', () => {
  it('returns empty strings for non-object errors', () => {
    expect(parseFunctionsError(null)).toEqual({ code: '', message: '' });
    expect(parseFunctionsError('oops')).toEqual({ code: '', message: '' });
  });

  it('extracts code and message from Firebase-style errors', () => {
    expect(
      parseFunctionsError({
        code: 'functions/unavailable',
        message: 'Service down',
      }),
    ).toEqual({
      code: 'functions/unavailable',
      message: 'Service down',
    });
  });
});

describe('getSubmitErrorMessage', () => {
  it('returns English rate-limit message for resource-exhausted code', () => {
    expect(
      getSubmitErrorMessage(
        { code: 'functions/resource-exhausted', message: 'Rate limited' },
        'Something went wrong.',
      ),
    ).toBe('Too many submissions. Try again in an hour.');
  });

  it('returns English rate-limit message for legacy Spanish server text', () => {
    expect(
      getSubmitErrorMessage(
        { message: 'Demasiados envios. Intenta de nuevo en 1 hora.' },
        'Something went wrong.',
      ),
    ).toBe('Too many submissions. Try again in an hour.');
  });

  it('returns caller fallback for other errors', () => {
    expect(
      getSubmitErrorMessage(new Error('boom'), 'Something went wrong. Try emailing directly.'),
    ).toBe('Something went wrong. Try emailing directly.');
  });
});
