import { useEffect, useRef } from 'react';

/** Desktop spotlight — updates via DOM ref, no React re-renders on mousemove */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia('(min-width: 1280px)');
    let listening = false;

    const move = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(14,165,233,0.05), transparent 80%)`;
    };

    const sync = () => {
      if (media.matches && !listening) {
        window.addEventListener('mousemove', move, { passive: true });
        listening = true;
      } else if (!media.matches && listening) {
        window.removeEventListener('mousemove', move);
        el.style.background = '';
        listening = false;
      }
    };

    sync();
    media.addEventListener('change', sync);

    return () => {
      media.removeEventListener('change', sync);
      if (listening) {
        window.removeEventListener('mousemove', move);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hidden xl:block pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
