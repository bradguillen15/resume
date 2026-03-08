import { motion } from "framer-motion"
import { resume } from "@/data/resume"

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export const Nav = () => (
  <motion.nav
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-12 py-5 bg-[rgba(10,10,15,0.85)] backdrop-blur-[12px] border-b border-border"
  >
    <span className="font-display text-[18px] text-accent font-medium">
      {resume.name.split(" ").slice(0, 2).join(" ")}
    </span>
    <div className="flex gap-8">
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
  </motion.nav>
)
