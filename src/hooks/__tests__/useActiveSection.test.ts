import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { RefObject } from 'react';
import { useActiveSection } from '../useActiveSection';

const SECTION_IDS = ['about', 'experience', 'skills'];

let ioCallback: IntersectionObserverCallback | undefined;
let ioOptions: IntersectionObserverInit | undefined;

function makeMockMedia(matches: boolean) {
  return {
    matches,
    media: '',
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
}

beforeEach(() => {
  ioCallback = undefined;
  ioOptions = undefined;

  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(cb: IntersectionObserverCallback, options?: IntersectionObserverInit) {
        ioCallback = cb;
        ioOptions = options;
      }
      observe = vi.fn();
      disconnect = vi.fn();
      unobserve = vi.fn();
      root = null;
      rootMargin = '';
      thresholds: number[] = [];
      takeRecords = () => [] as IntersectionObserverEntry[];
    },
  );

  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue(makeMockMedia(false)));

  SECTION_IDS.forEach(id => {
    const el = document.createElement('section');
    el.id = id;
    document.body.appendChild(el);
  });
});

afterEach(() => {
  SECTION_IDS.forEach(id => document.getElementById(id)?.remove());
  vi.unstubAllGlobals();
});

describe('useActiveSection', () => {
  it('returns the first section ID as the initial active value', () => {
    const containerRef = { current: null } as RefObject<HTMLDivElement | null>;
    const { result } = renderHook(() => useActiveSection(containerRef, SECTION_IDS));
    expect(result.current).toBe('about');
  });

  it('updates active section when an intersection entry fires', () => {
    const containerRef = { current: null } as RefObject<HTMLDivElement | null>;
    const { result } = renderHook(() => useActiveSection(containerRef, SECTION_IDS));

    act(() => {
      ioCallback!(
        [
          {
            isIntersecting: true,
            target: document.getElementById('skills')!,
            boundingClientRect: {} as DOMRectReadOnly,
            intersectionRatio: 1,
            intersectionRect: {} as DOMRectReadOnly,
            rootBounds: null,
            time: Date.now(),
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(result.current).toBe('skills');
  });

  it('does not update active section when isIntersecting is false', () => {
    const containerRef = { current: null } as RefObject<HTMLDivElement | null>;
    const { result } = renderHook(() => useActiveSection(containerRef, SECTION_IDS));

    act(() => {
      ioCallback!(
        [
          {
            isIntersecting: false,
            target: document.getElementById('experience')!,
            boundingClientRect: {} as DOMRectReadOnly,
            intersectionRatio: 0,
            intersectionRect: {} as DOMRectReadOnly,
            rootBounds: null,
            time: Date.now(),
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(result.current).toBe('about');
  });

  it('uses the container ref as observer root on desktop', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue(makeMockMedia(true)));

    const containerEl = document.createElement('div');
    const containerRef = { current: containerEl } as RefObject<HTMLDivElement | null>;
    renderHook(() => useActiveSection(containerRef, SECTION_IDS));

    expect(ioOptions?.root).toBe(containerEl);
  });

  it('uses null as root when containerRef.current is null on desktop', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue(makeMockMedia(true)));

    const containerRef = { current: null } as RefObject<HTMLDivElement | null>;
    renderHook(() => useActiveSection(containerRef, SECTION_IDS));

    expect(ioOptions?.root).toBeNull();
  });

  it('disconnects the observer on unmount', () => {
    const mockDisconnect = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(cb: IntersectionObserverCallback) {
          ioCallback = cb;
        }
        observe = vi.fn();
        disconnect = mockDisconnect;
        unobserve = vi.fn();
        root = null;
        rootMargin = '';
        thresholds: number[] = [];
        takeRecords = () => [] as IntersectionObserverEntry[];
      },
    );

    const containerRef = { current: null } as RefObject<HTMLDivElement | null>;
    const { unmount } = renderHook(() => useActiveSection(containerRef, SECTION_IDS));

    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
