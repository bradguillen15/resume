import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
  { id: 'hobbies', label: 'Hobbies' },
]

interface Props {
  scrollToSection: (id: string) => void
  activeSection: string
}

export const MobileHeader = ({ scrollToSection, activeSection }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => scrollToSection(id), 150)
  }

  return (
    <header className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-bg-secondary/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-5 py-2">
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          aria-label="Go to About"
          className="cursor-pointer bg-transparent border-none p-0 shrink-0"
        >
          <div className="spin-ring-wrap spin-ring-wrap-sm">
            <img
              src="/profile-photo.jpg"
              alt=""
              className="w-12 h-12 rounded-full object-cover object-top"
            />
          </div>
        </button>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer bg-transparent border-none"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-bg-secondary border-t border-border"
          >
            <nav className="flex flex-col py-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className={`text-left py-3.5 text-[12px] tracking-[0.08em] uppercase border-b border-border last:border-0 transition-all duration-200 cursor-pointer bg-transparent border-r-0 border-t-0 pl-5 ${
                      isActive
                        ? 'text-accent border-l-2 border-l-accent'
                        : 'text-text-secondary hover:text-text-primary border-l-2 border-l-transparent'
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
    </header>
  )
}
