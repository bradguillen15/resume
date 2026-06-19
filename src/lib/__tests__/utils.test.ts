import { describe, it, expect } from 'vitest';
import { cn } from '../utils';
import { inputClasses } from '../inputClasses';

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('ignores falsy values', () => {
    const disabled = false;
    expect(cn('foo', disabled && 'bar', undefined, null, '')).toBe('foo');
  });

  it('handles conditional classes', () => {
    const active = true;
    const disabled = false;
    expect(cn('base', active && 'active', disabled && 'disabled')).toBe(
      'base active',
    );
  });

  it('resolves Tailwind conflicts — last class wins', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });

  it('handles object syntax', () => {
    expect(cn({ 'font-bold': true, italic: false })).toBe('font-bold');
  });
});

describe('inputClasses', () => {
  it('is a non-empty string', () => {
    expect(typeof inputClasses).toBe('string');
    expect(inputClasses.length).toBeGreaterThan(0);
  });

  it('contains the core structural classes', () => {
    expect(inputClasses).toContain('w-full');
    expect(inputClasses).toContain('rounded-lg');
    expect(inputClasses).toContain('outline-none');
    expect(inputClasses).toContain('font-mono');
  });
});
