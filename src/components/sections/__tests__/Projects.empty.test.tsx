import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

vi.mock('@/data/resume', () => ({
  resume: {
    github: 'github.com/bradguillen15',
    projects: [
      {
        id: 'hidden-only',
        title: 'Hidden',
        description: 'Hidden',
        tags: [],
        status: 'Completed',
        github: null,
        live: null,
        image: null,
        visible: false,
      },
    ],
  },
}));

import { Projects } from '../Projects';

describe('Projects empty state', () => {
  it('shows the GitHub fallback when no projects are visible', () => {
    render(<Projects />);

    expect(screen.getByText(/more projects coming soon/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/bradguillen15',
    );
  });
});
