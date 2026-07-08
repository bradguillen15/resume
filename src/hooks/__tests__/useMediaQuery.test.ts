import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useMediaQuery } from '../useMediaQuery';

function makeMockMedia(matches: boolean) {
  let changeHandler: ((event: MediaQueryListEvent) => void) | null = null;

  const media = {
    matches,
    media: '',
    onchange: null,
    addEventListener: vi.fn((event: string, handler: (e: MediaQueryListEvent) => void) => {
      if (event === 'change') changeHandler = handler;
    }),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    _triggerChange: (next: boolean) => {
      media.matches = next;
      changeHandler?.({ matches: next } as MediaQueryListEvent);
    },
  };

  return media;
}

beforeEach(() => {
  vi.stubGlobal('matchMedia', vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useMediaQuery', () => {
  it('returns initial match state from matchMedia', () => {
    const media = makeMockMedia(true);
    vi.mocked(window.matchMedia).mockReturnValue(media as unknown as MediaQueryList);

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(true);
  });

  it('subscribes to change events and updates state', () => {
    const media = makeMockMedia(false);
    vi.mocked(window.matchMedia).mockReturnValue(media as unknown as MediaQueryList);

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(false);
    expect(media.addEventListener).toHaveBeenCalledWith('change', expect.any(Function));

    act(() => {
      media._triggerChange(true);
    });
    expect(result.current).toBe(true);
  });

  it('unsubscribes on unmount', () => {
    const media = makeMockMedia(false);
    vi.mocked(window.matchMedia).mockReturnValue(media as unknown as MediaQueryList);

    const { unmount } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    unmount();
    expect(media.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });
});
