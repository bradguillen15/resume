import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HeroTypeAnimation } from '../HeroTypeAnimation';

vi.mock('react-type-animation', () => ({
  TypeAnimation: ({ sequence }: { sequence: (string | number)[] }) => (
    <span>{sequence[0]}</span>
  ),
}));

describe('HeroTypeAnimation', () => {
  it('renders inside a div wrapper', () => {
    const { container } = render(<HeroTypeAnimation />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('forwards className to the wrapper div', () => {
    const { container } = render(<HeroTypeAnimation className="text-accent h-5" />);
    expect(container.firstChild).toHaveClass('text-accent', 'h-5');
  });

  it('renders the first sequence item as the initial text', () => {
    render(<HeroTypeAnimation />);
    expect(screen.getByText('Senior Front End Developer')).toBeInTheDocument();
  });
});
