import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Experience } from '../Experience';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

vi.mock('@/data/resume', () => ({
  resume: {
    experience: [
      {
        id: 'job-with-url',
        role: 'Senior Developer',
        company: 'Acme Corp',
        companyUrl: 'https://acme.example.com',
        period: '2022–Present',
        duration: '2 years',
        highlights: ['Built things'],
        tags: ['React'],
      },
      {
        id: 'job-no-url',
        role: 'Junior Developer',
        company: 'Initech',
        companyUrl: null,
        period: '2020–2022',
        duration: '2 years',
        highlights: ['Learned things'],
        tags: ['JavaScript'],
      },
    ],
  },
}));

describe('Experience', () => {
  it('renders company as a link when companyUrl is set', () => {
    render(<Experience />);
    const link = screen.getByRole('link', { name: 'Acme Corp' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://acme.example.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders company as plain text (no link) when companyUrl is null', () => {
    render(<Experience />);
    expect(screen.queryByRole('link', { name: 'Initech' })).not.toBeInTheDocument();
    expect(screen.getByText('Initech')).toBeInTheDocument();
  });

  it('renders role titles', () => {
    render(<Experience />);
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    expect(screen.getByText('Junior Developer')).toBeInTheDocument();
  });
});
