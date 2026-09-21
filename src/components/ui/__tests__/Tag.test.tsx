import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tag } from '../Tag';

describe('Tag', () => {
  it('renders an icon for a known technology', () => {
    const { container } = render(<Tag label="React" />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(container.querySelector('img')).not.toBeNull();
  });

  it('renders a concept tag as text only', () => {
    const { container } = render(<Tag label="Team Lead" />);
    expect(screen.getByText('Team Lead')).toBeInTheDocument();
    expect(container.querySelector('img, svg')).toBeNull();
  });
});
