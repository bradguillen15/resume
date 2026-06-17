import { useEffect, useRef } from 'react';

/** Desktop spotlight — updates via DOM ref, no React re-renders on mousemove */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)');
    if (!media.matches) return;

    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(14,165,233,0.05), transparent 80%)`;
    };

    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={ref}
      className="hidden xl:block pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
