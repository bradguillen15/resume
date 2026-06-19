import { describe, it, expect } from 'vitest';
import { parseLinkedInUrl } from '../parseLinkedInUrl';

describe('parseLinkedInUrl', () => {
  it('returns null for empty string', () => {
    expect(parseLinkedInUrl('')).toBeNull();
  });

  it('returns null for whitespace-only string', () => {
    expect(parseLinkedInUrl('   ')).toBeNull();
  });

  it('accepts linkedin.com path without protocol', () => {
    const result = parseLinkedInUrl('linkedin.com/in/john');
    expect(result).toBe('https://linkedin.com/in/john');
  });

  it('accepts https://linkedin.com URL', () => {
    const result = parseLinkedInUrl('https://linkedin.com/in/john');
    expect(result).toBe('https://linkedin.com/in/john');
  });

  it('accepts www.linkedin.com', () => {
    const result = parseLinkedInUrl('www.linkedin.com/in/john');
    expect(result).not.toBeNull();
    expect(result).toContain('linkedin.com');
  });

  it('accepts country subdomains like uk.linkedin.com', () => {
    const result = parseLinkedInUrl('https://uk.linkedin.com/in/john');
    expect(result).not.toBeNull();
  });

  it('rejects non-LinkedIn domains', () => {
    expect(parseLinkedInUrl('https://twitter.com/john')).toBeNull();
    expect(parseLinkedInUrl('https://github.com/john')).toBeNull();
    expect(parseLinkedInUrl('example.com')).toBeNull();
  });

  it('returns null for clearly malformed input', () => {
    expect(parseLinkedInUrl('not a url at all!!!')).toBeNull();
  });

  it('rejects linkedin-lookalike domains', () => {
    expect(parseLinkedInUrl('https://fakelinkedin.com/in/john')).toBeNull();
    expect(parseLinkedInUrl('https://linkedin.com.evil.com/in/john')).toBeNull();
  });
});
