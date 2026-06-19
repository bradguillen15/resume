import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Skills } from '../Skills';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, style }: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
      <div className={className} style={style}>{children}</div>
    ),
  },
}));

vi.mock('@/data/resume', () => ({
  resume: {
    skills: [
      {
        category: 'Frontend',
        items: [
          { name: 'React', years: 5, level: 4 },
          { name: 'TypeScript', years: 3, level: 2 },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Node.js', years: 4, level: 3 },
        ],
      },
    ],
  },
}));

vi.mock('@/components/icons/SkillIconImage', () => ({
  SkillIconImage: ({ name }: { name: string }) => <span data-testid={`icon-${name}`} />,
}));

describe('Skills', () => {
  it('renders the section with id="skills"', () => {
    const { container } = render(<Skills />);
    expect(container.querySelector('#skills')).toBeInTheDocument();
  });

  it('renders all category headings', () => {
    render(<Skills />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('renders all skill chip names', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('renders 4 level dots per chip', () => {
    const { container } = render(<Skills />);
    // Each SkillChip has a LevelDots with exactly 4 dot spans
    // 3 chips × 4 dots = 12 dot spans inside .flex.gap-\[3px\] divs
    const dotContainers = container.querySelectorAll('.flex.gap-\\[3px\\]');
    expect(dotContainers.length).toBe(3);
    dotContainers.forEach(container => {
      expect(container.querySelectorAll('span').length).toBe(4);
    });
  });

  it('marks the correct number of dots as active based on level', () => {
    const { container } = render(<Skills />);
    // React has level 4 — all 4 dots should have bg-accent
    const dotContainers = container.querySelectorAll('.flex.gap-\\[3px\\]');
    const reactDots = dotContainers[0].querySelectorAll('span');
    const activeDots = Array.from(reactDots).filter(s =>
      s.className.includes('bg-accent') && !s.className.includes('bg-accent/20'),
    );
    expect(activeDots.length).toBe(4);
  });

  it('applies chip-float animation name via inline style', () => {
    const { container } = render(<Skills />);
    const firstChip = container.querySelector('[style*="chip-float"]');
    expect(firstChip).not.toBeNull();
  });
});
