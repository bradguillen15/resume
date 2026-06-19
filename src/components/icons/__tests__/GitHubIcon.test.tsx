import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GitHubIcon } from '../GitHubIcon';

describe('GitHubIcon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<GitHubIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies custom width and height', () => {
    const { container } = render(<GitHubIcon width={32} height={32} />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('defaults to 20x20', () => {
    const { container } = render(<GitHubIcon />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('width', '20');
    expect(svg).toHaveAttribute('height', '20');
  });

  it('forwards className to the SVG', () => {
    const { container } = render(<GitHubIcon className="text-accent" />);
    expect(container.querySelector('svg')).toHaveClass('text-accent');
  });

  it('uses currentColor fill so it inherits text color', () => {
    const { container } = render(<GitHubIcon />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('fill')).toBe('currentColor');
  });

  it('renders the GitHub path data', () => {
    const { container } = render(<GitHubIcon />);
    expect(container.querySelector('path')).toBeInTheDocument();
  });
});
