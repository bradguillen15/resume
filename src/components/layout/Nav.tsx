import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { resume } from "@/data/resume"

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-[100] flex flex-col bg-[rgba(10,10,15,0.85)] backdrop-blur-[12px] border-b border-border px-4 py-5 md:px-12 md:flex-row md:items-center md:justify-between"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-[18px] text-accent font-medium">
          {resume.name.split(" ").slice(0, 2).join(" ")}
        </span>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 -mr-2 text-text-muted hover:text-text transition-colors"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      <div className="hidden md:flex md:gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-text-muted text-[12px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-text"
          >
            {l.label}
          </a>
        ))}
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 pt-4 pb-2">
              {links.map((l) => {
                const id = l.href.slice(1)
                const goToSection = () => {
                  setMenuOpen(false)
                  requestAnimationFrame(() => {
                    const el = document.getElementById(id)
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    window.history.pushState(null, "", l.href)
                  })
                }
                return (
                  <button
                    key={l.href}
                    type="button"
                    onClick={goToSection}
                    className="text-text-muted text-[12px] tracking-[0.08em] uppercase py-4 px-2 text-left transition-colors duration-200 hover:text-text border-b border-border last:border-0 w-full min-h-[44px] bg-transparent cursor-pointer"
                  >
                    {l.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
