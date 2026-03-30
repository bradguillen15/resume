import { resume } from "@/data/resume"

export const Footer = () => (
  <footer className="border-t border-border px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-text-muted text-[11px] tracking-[0.06em]">
    <span>
      {resume.name} · {new Date().getFullYear()}
    </span>
    <span>React 19 + Tailwind 4 + Framer Motion · Firebase Hosting</span>
  </footer>
)
