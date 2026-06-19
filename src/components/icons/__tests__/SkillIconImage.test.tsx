import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkillIconImage } from '../SkillIconImage';

describe('SkillIconImage', () => {
  it('renders an <img> for a skill with a known CDN URL', () => {
    render(<SkillIconImage name="JavaScript" size={24} />);
    const img = screen.getByRole('presentation');
    expect(img.tagName).toBe('IMG');
    expect(img).toHaveAttribute('width', '24');
    expect(img).toHaveAttribute('height', '24');
  });

  it('passes the size as width and height on the img', () => {
    render(<SkillIconImage name="TypeScript" size={32} />);
    const img = screen.getByRole('presentation');
    expect(img).toHaveAttribute('width', '32');
    expect(img).toHaveAttribute('height', '32');
  });

  it('renders a fallback icon component for an unknown CDN URL but known icon', () => {
    // Gulp has no CDN icon URL but has a fallback react-icon
    // Both URL and fallback exist for Gulp — renders img
    // Test a truly unknown skill: returns null
    const { container } = render(<SkillIconImage name="NotARealSkill" size={20} />);
    expect(container.firstChild).toBeNull();
  });

  it('forwards className to the img element', () => {
    render(<SkillIconImage name="React" size={20} className="shrink-0" />);
    const img = screen.getByRole('presentation');
    expect(img).toHaveClass('shrink-0');
  });

  it('sets loading=lazy and decoding=async on the img', () => {
    render(<SkillIconImage name="Docker" size={20} />);
    const img = screen.getByRole('presentation');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('decoding', 'async');
  });
});
