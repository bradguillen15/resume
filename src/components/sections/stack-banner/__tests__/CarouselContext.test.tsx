import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CarouselProvider, useCarouselState } from '../CarouselContext';
import { ROTATE_MS } from '../constants';

function IndexDisplay() {
  const { indices, advance } = useCarouselState();
  return (
    <div>
      <span data-testid="frontend-index">{indices.Frontend}</span>
      <span data-testid="backend-index">{indices.Backend}</span>
      <button onClick={() => advance('Frontend')}>advance-frontend</button>
    </div>
  );
}

describe('CarouselProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts all indices at 0', () => {
    render(
      <CarouselProvider paused={false}>
        <IndexDisplay />
      </CarouselProvider>,
    );
    expect(screen.getByTestId('frontend-index').textContent).toBe('0');
    expect(screen.getByTestId('backend-index').textContent).toBe('0');
  });

  it('advance() increments only the targeted category', () => {
    render(
      <CarouselProvider paused={false}>
        <IndexDisplay />
      </CarouselProvider>,
    );

    act(() => {
      screen.getByText('advance-frontend').click();
    });

    expect(screen.getByTestId('frontend-index').textContent).toBe('1');
    expect(screen.getByTestId('backend-index').textContent).toBe('0');
  });

  it('auto-advances all indices after ROTATE_MS when not paused', () => {
    render(
      <CarouselProvider paused={false}>
        <IndexDisplay />
      </CarouselProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(ROTATE_MS);
    });

    expect(screen.getByTestId('frontend-index').textContent).toBe('1');
    expect(screen.getByTestId('backend-index').textContent).toBe('1');
  });

  it('does not auto-advance when paused', () => {
    render(
      <CarouselProvider paused={true}>
        <IndexDisplay />
      </CarouselProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(ROTATE_MS * 5);
    });

    expect(screen.getByTestId('frontend-index').textContent).toBe('0');
  });

  it('throws when useCarouselState is used outside CarouselProvider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<IndexDisplay />)).toThrow(
      'useCarouselState must be used within CarouselProvider',
    );
    consoleError.mockRestore();
  });
});
