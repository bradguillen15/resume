import { motion } from "framer-motion"
import { resume } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Tag } from "@/components/ui/Tag"

export const Projects = () => (
  <section id="projects" className="px-12 py-[120px]">
    <SectionLabel number="03" label="Projects" />
    <div className="grid gap-px border border-border rounded-lg overflow-hidden">
      {resume.projects.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="px-8 py-7 bg-bg-subtle border-b border-border transition-colors duration-200 cursor-pointer hover:bg-bg-elevated"
        >
          <div className="flex justify-between items-start mb-2.5">
            <h3 className="font-display text-[18px] font-light text-text">
              {p.title}
            </h3>
            <span className="text-text-faint text-[11px] tracking-[0.06em]">
              {p.status}
            </span>
          </div>
          <p className="text-text-muted text-[13px] leading-[1.7] mb-4">
            {p.description}
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {p.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
    <p className="text-text-faint text-[12px] mt-4 text-center">
      More projects coming soon — check GitHub for latest work.
    </p>
  </section>
)
