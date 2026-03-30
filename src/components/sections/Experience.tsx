import { motion } from "framer-motion"
import { resume } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Tag } from "@/components/ui/Tag"

export const Experience = () => (
  <section id="experience" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[120px]">
    <SectionLabel number="01" label="Experience" />
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {resume.experience.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="pl-8 sm:pl-10 mb-14 relative group"
        >
          <div
            className="absolute -left-1 top-1.5 w-[9px] h-[9px] rounded-full border border-border-strong transition-colors duration-200 group-hover:border-accent"
            style={{
              background: i === 0 ? "var(--color-accent)" : "var(--color-bg-hover)",
            }}
          />

          {/* Hover left border accent */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-px" />

          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
            <div>
              <h3 className="font-display text-[18px] sm:text-[20px] font-semibold text-text-primary mb-0.5">
                {exp.role}
              </h3>
              <a
                href={exp.companyUrl || undefined}
                target={exp.companyUrl ? "_blank" : undefined}
                rel="noreferrer"
                className="text-accent text-[13px] hover:underline"
              >
                {exp.company}
              </a>
            </div>
            <div className="text-right">
              <div className="text-text-secondary text-[12px]">{exp.period}</div>
              <div className="text-text-muted text-[11px]">{exp.duration}</div>
            </div>
          </div>

          <ul className="list-none mb-4">
            {exp.highlights.map((h, j) => (
              <li
                key={j}
                className="text-text-secondary text-[13px] leading-[1.8] pl-4 relative mb-1"
              >
                <span className="absolute left-0 text-text-muted">–</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="flex gap-1.5 flex-wrap">
            {exp.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)
