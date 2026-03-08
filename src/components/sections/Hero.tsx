import { motion } from "framer-motion"
import { resume } from "@/data/resume"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

export const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-12 relative">
    <motion.div {...fadeUp(0.1)}>
      <span className="text-text-muted text-[12px] tracking-[0.1em] uppercase">
        Available for work · Costa Rica
      </span>
    </motion.div>

    <motion.h1
      {...fadeUp(0.25)}
      className="font-display text-[clamp(48px,8vw,88px)] font-light leading-[1.05] tracking-[-0.02em] mt-4 mb-6 text-text"
    >
      {resume.name.split(" ")[0]}{" "}
      <span className="font-medium text-accent">
        {resume.name.split(" ").slice(1).join(" ")}
      </span>
    </motion.h1>

    <motion.p
      {...fadeUp(0.4)}
      className="text-[15px] text-text-muted max-w-[520px] leading-[1.8] mb-10"
    >
      {resume.summary}
    </motion.p>

    <motion.div
      {...fadeUp(0.55)}
      className="flex gap-4 flex-wrap"
    >
      <a
        href="#contact"
        className="px-6 py-2.5 bg-accent text-[#0A0A0F] rounded-md text-[13px] font-normal tracking-[0.04em] transition-opacity duration-200 hover:opacity-85"
      >
        Get in touch
      </a>
      <a
        href={`https://${resume.linkedin}`}
        target="_blank"
        rel="noreferrer"
        className="px-6 py-2.5 border border-border rounded-md text-[13px] text-text-muted transition-all duration-200 hover:border-border-hover hover:text-text"
      >
        LinkedIn →
      </a>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-10 left-12 flex items-center gap-2 text-text-faint text-[11px] tracking-[0.08em]"
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓
      </motion.div>
    </motion.div>
  </section>
)
