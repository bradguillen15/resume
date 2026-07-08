import { describe, it, expect } from 'vitest';
import { SOCIAL_LINKS } from '../socialLinks';

describe('SOCIAL_LINKS', () => {
  it('uses the sidebar order: Resume, LinkedIn, GitHub, Email', () => {
    expect(SOCIAL_LINKS.map(link => link.label)).toEqual([
      'Resume',
      'LinkedIn',
      'GitHub',
      'Email',
    ]);
  });

  it('marks external links except email', () => {
    expect(SOCIAL_LINKS.map(link => link.external)).toEqual([
      true,
      true,
      true,
      false,
    ]);
  });

  it('uses mailto for email and https for profile links', () => {
    const email = SOCIAL_LINKS.find(link => link.label === 'Email');
    const linkedIn = SOCIAL_LINKS.find(link => link.label === 'LinkedIn');

    expect(email?.href.startsWith('mailto:')).toBe(true);
    expect(linkedIn?.href.startsWith('https://')).toBe(true);
  });
});
