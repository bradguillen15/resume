import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Footer } from '../Footer';

vi.mock('@/data/resume', () => ({
  resume: { name: 'Jane Doe' },
}));

describe('Footer', () => {
  it('renders the user name', () => {
    render(<Footer />);
    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
  });

  it('renders the current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders the tech stack label', () => {
    render(<Footer />);
    expect(screen.getByText(/React 19/)).toBeInTheDocument();
  });
});
