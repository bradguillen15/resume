import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Projects } from '../Projects';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    img: ({
      alt,
      src,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img alt={alt} src={src} {...props} />
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('@/data/resume', () => ({
  resume: {
    github: 'github.com/bradguillen15',
    projects: [
      {
        id: 'gallery-project',
        title: 'Gallery App',
        description: 'A project with screenshots.',
        tags: ['React'],
        status: 'Active',
        github: 'https://github.com/example/gallery',
        live: 'https://gallery.example.com',
        image: null,
        gallery: ['/shot-a.webp', '/shot-b.webp'],
        visible: true,
      },
      {
        id: 'hidden-project',
        title: 'Hidden App',
        description: 'Should not render.',
        tags: ['Node'],
        status: 'Completed',
        github: null,
        live: null,
        image: null,
        visible: false,
      },
    ],
  },
}));

describe('Projects', () => {
  it('renders only visible projects', () => {
    render(<Projects />);

    expect(screen.getByText('Gallery App')).toBeInTheDocument();
    expect(screen.queryByText('Hidden App')).not.toBeInTheDocument();
  });

  it('renders status badges and external links', () => {
    render(<Projects />);

    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/example/gallery',
    );
    expect(screen.getByRole('link', { name: /live/i })).toHaveAttribute(
      'href',
      'https://gallery.example.com',
    );
  });

  it('advances gallery screenshots with the next control', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    expect(screen.getByAltText(/screenshot 1 of 2/i)).toHaveAttribute(
      'src',
      '/shot-a.webp',
    );

    await user.click(screen.getByRole('button', { name: /next screenshot/i }));

    expect(screen.getByAltText(/screenshot 2 of 2/i)).toHaveAttribute(
      'src',
      '/shot-b.webp',
    );
  });
});
