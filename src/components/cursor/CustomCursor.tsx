import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label';
const DESKTOP_CURSOR_QUERY = '(min-width: 1280px) and (pointer: fine)';

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_CURSOR_QUERY).matches,
  );
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 280, damping: 28, mass: 0.08 });
  const ringY = useSpring(mouseY, { stiffness: 280, damping: 28, mass: 0.08 });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hoveringRef = useRef(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_CURSOR_QUERY);
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener('change', updateEnabled);
    return () => media.removeEventListener('change', updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      const interactive = !!(e.target as Element).closest(INTERACTIVE_SELECTOR);
      if (interactive !== hoveringRef.current) {
        hoveringRef.current = interactive;
        setIsHovering(interactive);
      }
    };

    const hide = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', hide);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', hide);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 0 : 6,
          height: isHovering ? 0 : 6,
          background: 'var(--color-accent)',
          transition: 'width 150ms, height 150ms',
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
          border: '1px solid var(--color-accent)',
          background: isHovering ? 'var(--color-accent-glow)' : 'transparent',
          opacity: isVisible ? (isHovering ? 0.6 : 0.5) : 0,
          transition: 'width 200ms, height 200ms, background 200ms, opacity 200ms',
        }}
      />
    </>
  );
};
