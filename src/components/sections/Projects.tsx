import { motion } from 'framer-motion'
import { resume } from '@/data/resume'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { Card, CardContent } from '@/components/ui/card'

const statusStyles: Record<string, string> = {
  Active: 'bg-green-500/10 text-green-400',
  'In Progress': 'bg-yellow-400/10 text-yellow-400',
  Completed: 'bg-text-muted/10 text-text-muted',
}

export const Projects = () => {
  const visible = resume.projects.filter((p) => p.visible)

  return (
    <section id="projects" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[120px]">
      <SectionLabel number="03" label="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {visible.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="overflow-hidden border-border bg-bg-secondary hover:border-accent/30 transition-colors duration-300 h-full flex flex-col">
              {/* Card header — image or gradient fallback */}
              <div className="h-[160px] flex-shrink-0 overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div
                    className="h-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, var(--color-bg-hover) 0%, rgba(14,165,233,0.15) 100%)`,
                    }}
                  >
                    <span className="font-display text-[22px] font-semibold text-text-primary/20 select-none">
                      {p.title}
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="flex flex-col flex-1 p-5 gap-3">
                {/* Status badge */}
                <span
                  className={`self-start px-2 py-0.5 rounded text-[10px] tracking-[0.08em] uppercase font-mono ${statusStyles[p.status] ?? statusStyles.Completed}`}
                >
                  {p.status}
                </span>

                <h3 className="font-display text-[17px] font-semibold text-text-primary leading-[1.3]">
                  {p.title}
                </h3>

                <p className="text-text-secondary text-[13px] leading-[1.7] flex-1">
                  {p.description}
                </p>

                <div className="flex gap-1.5 flex-wrap">
                  {p.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>

                {/* Links */}
                {(p.github || p.live) && (
                  <div className="flex gap-4 pt-3 border-t border-border mt-auto">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-muted text-[12px] hover:text-accent transition-colors duration-200"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-muted text-[12px] hover:text-accent transition-colors duration-200"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {visible.length === 0 && (
        <p className="text-text-muted text-[13px] text-center py-10">
          More projects coming soon — check{' '}
          <a href={`https://${resume.github}`} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            GitHub
          </a>{' '}
          for latest work.
        </p>
      )}
    </section>
  )
}
