import { describe, it, expect } from 'vitest';
import { getSkillColor, getSkillIconUrl, getSkillIcon, SKILL_ICON_COLORS } from '../skillIcons';

const DEFAULT_COLOR = '#F1F5F9';

describe('getSkillColor', () => {
  it('returns the brand color for a known skill', () => {
    expect(getSkillColor('JavaScript')).toBe('#F7DF1E');
    expect(getSkillColor('TypeScript')).toBe('#3178C6');
    expect(getSkillColor('React')).toBe('#61DAFB');
  });

  it('returns the default color for an unknown skill', () => {
    expect(getSkillColor('NotARealSkill')).toBe(DEFAULT_COLOR);
  });

  it('returns the default color for Gulp which has no color defined', () => {
    expect(SKILL_ICON_COLORS['Gulp']).toBeUndefined();
    expect(getSkillColor('Gulp')).toBe(DEFAULT_COLOR);
  });
});

describe('getSkillIconUrl', () => {
  it('returns a URL string for a known skill', () => {
    const url = getSkillIconUrl('JavaScript');
    expect(typeof url).toBe('string');
    expect(url).toContain('javascript');
  });

  it('returns undefined for an unknown skill', () => {
    expect(getSkillIconUrl('NotARealSkill')).toBeUndefined();
  });

  it('returns devicon URLs for most skills', () => {
    expect(getSkillIconUrl('TypeScript')).toContain('devicon');
    expect(getSkillIconUrl('React')).toContain('devicon');
  });
});

describe('getSkillIcon', () => {
  it('returns an icon component (function) for a known skill', () => {
    const icon = getSkillIcon('React');
    expect(typeof icon).toBe('function');
  });

  it('returns undefined for an unknown skill', () => {
    expect(getSkillIcon('NotARealSkill')).toBeUndefined();
  });

  it('Claude Code reuses the Claude icon component', () => {
    expect(getSkillIcon('Claude Code')).toBe(getSkillIcon('Claude'));
  });
});
