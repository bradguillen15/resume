import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resume } from '@/data/resume';
import { NAV_LINKS } from '@/lib/nav';

interface Props {
  scrollToSection: (id: string) => void;
  activeSection: string;
}

export const MobileHeader = ({ scrollToSection, activeSection }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [firstName, ...lastNameParts] = resume.name.split(' ');
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    menuBtnRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 150);
  };

  return (
    <>
      <header className="xl:hidden fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-secondary/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-2">
          <span className="min-w-0 truncate font-display text-[15px] text-text-primary sm:text-[16px]">
            {firstName}{' '}
            <span className="text-accent">{lastNameParts.join(' ')}</span>
          </span>

          <button
            ref={menuBtnRef}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(open => !open)}
            className="-mr-2 cursor-pointer border-none bg-transparent p-2 text-text-secondary transition-colors hover:text-text-primary"
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="xl:hidden fixed inset-0 top-12 z-40 border-none bg-bg-primary/50 p-0"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              onKeyDown={e => {
                if (e.key === 'Escape') setMenuOpen(false);
              }}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="xl:hidden fixed inset-x-0 top-12 z-40 flex flex-col border-b border-border bg-bg-secondary py-2"
            >
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className={`cursor-pointer border-r-0 border-t-0 bg-transparent py-3.5 pl-5 text-left text-[12px] tracking-[0.08em] uppercase transition-all duration-200 last:border-0 border-b border-border ${
                      isActive
                        ? 'border-l-2 border-l-accent text-accent'
                        : 'border-l-2 border-l-transparent text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
