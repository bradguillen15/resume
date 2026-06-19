import { describe, it, expect } from 'vitest';
import { NAV_LINKS, SECTION_IDS } from '../nav';

describe('NAV_LINKS', () => {
  it('contains all expected sections', () => {
    const ids = NAV_LINKS.map(l => l.id);
    expect(ids).toContain('about');
    expect(ids).toContain('experience');
    expect(ids).toContain('skills');
    expect(ids).toContain('projects');
    expect(ids).toContain('certifications');
    expect(ids).toContain('reviews');
    expect(ids).toContain('contact');
    expect(ids).toContain('hobbies');
  });

  it('every link has a non-empty id and label', () => {
    for (const link of NAV_LINKS) {
      expect(link.id.length).toBeGreaterThan(0);
      expect(link.label.length).toBeGreaterThan(0);
    }
  });
});

describe('SECTION_IDS', () => {
  it('is derived from NAV_LINKS ids', () => {
    expect(SECTION_IDS).toEqual(NAV_LINKS.map(l => l.id));
  });

  it('has the same length as NAV_LINKS', () => {
    expect(SECTION_IDS.length).toBe(NAV_LINKS.length);
  });
});
