import { describe, it, expect } from 'vitest';
import { getChatErrorMessage } from '../chat';

describe('getChatErrorMessage', () => {
  it('passes through daily cap messages from the server', () => {
    expect(
      getChatErrorMessage({
        code: 'functions/resource-exhausted',
        message: 'Daily chat limit reached. Please try again tomorrow.',
      }),
    ).toBe('Daily chat limit reached. Please try again tomorrow.');
  });

  it('passes through Gemini capacity messages', () => {
    expect(
      getChatErrorMessage({
        code: 'functions/resource-exhausted',
        message: 'The AI is at capacity right now. Please try again in a bit.',
      }),
    ).toBe('The AI is at capacity right now. Please try again in a bit.');
  });

  it('falls back for resource-exhausted without a server message', () => {
    expect(
      getChatErrorMessage({ code: 'functions/resource-exhausted' }),
    ).toMatch(/rate limit/i);
  });

  it('passes through failed-precondition config errors', () => {
    expect(
      getChatErrorMessage({
        code: 'functions/failed-precondition',
        message: 'The AI is not configured right now.',
      }),
    ).toBe('The AI is not configured right now.');
  });

  it('passes through unavailable errors', () => {
    expect(
      getChatErrorMessage({
        code: 'functions/unavailable',
        message: 'The AI returned an empty response.',
      }),
    ).toBe('The AI returned an empty response.');
  });

  it('returns a generic message for unknown errors', () => {
    expect(getChatErrorMessage(new Error('boom'))).toMatch(/something went wrong/i);
  });
});
