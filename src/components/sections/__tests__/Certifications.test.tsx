import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Certifications } from '../Certifications';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

vi.mock('@/data/resume', () => ({
  resume: {
    certifications: [
      {
        group: 'UnknownGroup',
        items: [{ name: 'Secret Cert', url: null, date: null }],
      },
      {
        group: 'Completed',
        items: [
          { name: 'React Fundamentals', url: null, date: 'Jan 2024' },
          { name: 'TypeScript Pro', url: 'https://example.com/cert', date: null },
        ],
      },
      {
        group: 'In Progress',
        items: [{ name: 'AWS Practitioner', url: null, date: null }],
      },
    ],
  },
}));

describe('Certifications', () => {
  it('renders nothing for an unknown group key', () => {
    render(<Certifications />);
    expect(screen.queryByText('Secret Cert')).not.toBeInTheDocument();
  });

  it('renders items for known groups', () => {
    render(<Certifications />);
    expect(screen.getByText('React Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('AWS Practitioner')).toBeInTheDocument();
  });

  it('renders a credential link when cert.url is set', () => {
    render(<Certifications />);
    const link = screen.getByRole('link', { name: /view credential for TypeScript Pro/i });
    expect(link).toHaveAttribute('href', 'https://example.com/cert');
  });

  it('renders cert date when present', () => {
    render(<Certifications />);
    expect(screen.getByText('Jan 2024')).toBeInTheDocument();
  });
});
