import { resume } from "@/data/resume"

export const Footer = () => (
  <footer className="border-t border-border px-12 py-8 flex justify-between items-center text-text-faint text-[11px] tracking-[0.06em]">
    <span>
      {resume.name} · {new Date().getFullYear()}
    </span>
    <span>Built with React + Vite + Tailwind · Hosted on GitHub Pages</span>
  </footer>
)
