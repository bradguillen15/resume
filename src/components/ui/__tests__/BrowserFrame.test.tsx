import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserFrame } from '../BrowserFrame';

describe('BrowserFrame', () => {
  it('shows the live URL as a link in the address bar', () => {
    render(
      <BrowserFrame url="https://free-slot-blush.vercel.app/">
        <span>content</span>
      </BrowserFrame>,
    );
    const link = screen.getByRole('link', { name: 'free-slot-blush.vercel.app' });
    expect(link).toHaveAttribute('href', 'https://free-slot-blush.vercel.app/');
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('shows a placeholder address when there is no live URL', () => {
    render(
      <BrowserFrame url={null}>
        <span>content</span>
      </BrowserFrame>,
    );
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText('localhost')).toBeInTheDocument();
  });
});
