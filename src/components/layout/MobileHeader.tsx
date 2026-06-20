import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { resume } from '@/data/resume'
import { NAV_LINKS } from '@/lib/nav'

interface Props {
  scrollToSection: (id: string) => void
  activeSection: string
}

export const MobileHeader = ({ scrollToSection, activeSection }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [firstName, ...lastNameParts] = resume.name.split(' ')

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  const handleNav = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => scrollToSection(id), 150)
  }

  return (
    <>
      {!menuOpen && (
        <header className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-bg-secondary/90 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between px-5 py-2">
            <span className="min-w-0 truncate font-display text-[15px] sm:text-[16px] text-text-primary">
              {firstName}{' '}
              <span className="text-accent">{lastNameParts.join(' ')}</span>
            </span>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={false}
              onClick={() => setMenuOpen(true)}
              className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer bg-transparent border-none"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </header>
      )}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden fixed inset-0 z-50 flex flex-col bg-bg-secondary"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-2">
              <span className="font-display text-[15px] sm:text-[16px] text-text-primary truncate">
                {firstName}{' '}
                <span className="text-accent">{lastNameParts.join(' ')}</span>
              </span>

              <button
                type="button"
                aria-label="Close menu"
                aria-expanded={true}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer border-none bg-transparent p-2 -mr-2 text-text-secondary transition-colors hover:text-text-primary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mobile-menu-photo flex min-h-0 flex-1 items-end justify-center overflow-visible px-4 pt-2 pb-1">
              <div className="profile-portrait-wrap profile-portrait-wrap-menu">
                <img src="/profile-photo.png" alt={resume.name} />
              </div>
            </div>

            <nav className="flex shrink-0 flex-col border-t border-border py-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id
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
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
