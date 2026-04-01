import { motion } from 'framer-motion'
import { resume } from '@/data/resume'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface SkillItem {
  name: string
  icon: string | null
  years: number
  level: number
}

const LevelDots = ({ level }: { level: number }) => (
  <div className="flex gap-[3px] items-center">
    {[1, 2, 3, 4].map((i) => (
      <span
        key={i}
        className={`w-[5px] h-[5px] rounded-full transition-colors duration-200 ${
          i <= level ? 'bg-accent' : 'bg-border-strong group-hover:bg-accent/20'
        }`}
      />
    ))}
  </div>
)

const SkillChip = ({ item }: { item: SkillItem }) => (
  <div
    className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-accent hover:shadow-[0_0_12px_rgba(14,165,233,0.2)] transition-all duration-200 group cursor-default min-w-[80px]"
    style={{ background: '#252540' }}
    onMouseEnter={e => (e.currentTarget.style.background = '#303055')}
    onMouseLeave={e => (e.currentTarget.style.background = '#252540')}
  >
    <div className="flex items-center gap-2">
      {item.icon && (
        <i className={`${item.icon} colored text-[20px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0`} />
      )}
      <span className="text-text-secondary text-[12px] font-semibold whitespace-nowrap group-hover:text-text-primary transition-colors duration-200 leading-none">{item.name}</span>
    </div>
    <LevelDots level={item.level} />
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
