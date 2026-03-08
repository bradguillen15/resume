import { motion } from "framer-motion"
import { resume } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"

const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string
  level: number
  delay: number
}) => (
  <div className="mb-3.5">
    <div className="flex justify-between items-baseline mb-1.5">
      <span className="text-text-muted text-[13px]">{name}</span>
      <span className="text-text-faint text-[11px] font-mono">{level}%</span>
    </div>
    <div className="w-full h-1 bg-border rounded-sm overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="h-full rounded-sm"
        style={{
          background:
            level >= 85
              ? "var(--color-accent)"
              : level >= 65
                ? "rgba(74, 158, 255, 0.6)"
                : "rgba(74, 158, 255, 0.35)",
        }}
      />
    </div>
  </div>
)

export const Skills = () => (
  <section id="skills" className="px-12 py-[120px]">
    <SectionLabel number="02" label="Skills" />
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
      {resume.skills.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: gi * 0.1 }}
          className="p-7 bg-bg-subtle border border-border rounded-lg transition-colors duration-200 hover:border-border-hover"
        >
          <div className="text-accent text-[11px] tracking-[0.1em] uppercase mb-5 pb-3 border-b border-border">
            {group.category}
          </div>
          {group.items.map((item, ii) => (
            <SkillBar
              key={item.name}
              name={item.name}
              level={item.level}
              delay={gi * 0.1 + ii * 0.05}
            />
          ))}
        </motion.div>
      ))}
    </div>
  </section>
)
