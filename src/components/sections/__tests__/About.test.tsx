import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { About } from '../About';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: { children?: React.ReactNode; className?: string }) => (
      <div className={className}>{children}</div>
    ),
  },
}));

vi.mock('@/data/resume', () => ({
  resume: {
    aboutSummary: 'Summary paragraph about the developer.',
    aboutContext: 'Context paragraph with more details.',
  },
}));

describe('About', () => {
  it('renders the section with id="about"', () => {
    const { container } = render(<About />);
    expect(container.querySelector('#about')).toBeInTheDocument();
  });

  it('renders the aboutSummary text', () => {
    render(<About />);
    expect(screen.getByText('Summary paragraph about the developer.')).toBeInTheDocument();
  });

  it('renders the aboutContext text', () => {
    render(<About />);
    expect(screen.getByText('Context paragraph with more details.')).toBeInTheDocument();
  });
});
