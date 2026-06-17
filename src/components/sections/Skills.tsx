import { motion } from 'framer-motion'
import { resume } from '@/data/resume'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SKILL_ICON_COLORS, SKILL_ICONS } from '@/lib/skillIcons'

interface SkillItem {
  name: string
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

const SkillChip = ({ item, index }: { item: SkillItem; index: number }) => {
  const Icon = SKILL_ICONS[item.name]
  const iconColor = SKILL_ICON_COLORS[item.name]
  const duration = 2.8 + (index % 5) * 0.35
  const delay = index * 0.22

  return (
    <div
      className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-accent hover:shadow-[0_0_12px_rgba(14,165,233,0.2)] transition-colors duration-200 group cursor-default min-w-[80px]"
      style={{
        background: '#252540',
        animationName: 'chip-float',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = '#303055';
        (e.currentTarget as HTMLElement).style.animationPlayState = 'paused';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = '#252540';
        (e.currentTarget as HTMLElement).style.animationPlayState = 'running';
      }}
    >
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon
            size={20}
            color={iconColor}
            className="group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
          />
        )}
        <span className="text-text-secondary text-[12px] font-semibold whitespace-nowrap group-hover:text-text-primary transition-colors duration-200 leading-none">
          {item.name}
        </span>
      </div>
      <LevelDots level={item.level} />
    </div>
  )
}

export const Skills = () => (
  <section id="skills" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[120px]">
    <SectionLabel number="02" label="Skills" />
    <div className="space-y-6">
      {resume.skills.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: gi * 0.08 }}
          className="rounded-xl border border-border p-5"
          style={{ background: 'rgba(15, 15, 26, 0.6)' }}
        >
          <h3 className="text-[10px] tracking-[0.14em] uppercase text-accent mb-4 font-mono">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {group.items.map((item, i) => (
              <SkillChip key={item.name} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)
