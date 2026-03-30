import { motion } from 'framer-motion'
import { resume } from '@/data/resume'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface SkillItem {
  name: string
  icon: string | null
}

const SkillChip = ({ item }: { item: SkillItem }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-secondary border border-border hover:border-accent/30 transition-colors duration-200 group">
    {item.icon && (
      <i className={`${item.icon} colored text-[18px] group-hover:scale-110 transition-transform duration-200`} />
    )}
    <span className="text-text-secondary text-[12px] whitespace-nowrap">{item.name}</span>
  </div>
)

export const Skills = () => (
  <section id="skills" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[120px]">
    <SectionLabel number="02" label="Skills" />
    <div className="space-y-10">
      {resume.skills.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: gi * 0.08 }}
        >
          <h3 className="text-[11px] tracking-[0.12em] uppercase text-accent mb-4 pb-3 border-b border-border font-mono">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <SkillChip key={item.name} item={item} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)
