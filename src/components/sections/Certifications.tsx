import { motion } from 'framer-motion'
import { resume } from '@/data/resume'
import { SectionLabel } from '@/components/ui/SectionLabel'

const groupConfig = {
  Completed: {
    dotClass: 'bg-green-500',
    labelClass: 'text-green-400',
    badgeClass: 'border-green-500/30 text-green-400 hover:bg-green-500/10',
  },
  'In Progress': {
    dotClass: 'bg-yellow-400',
    labelClass: 'text-yellow-400',
    badgeClass: 'border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10',
  },
  Planned: {
    dotClass: 'bg-text-muted',
    labelClass: 'text-text-muted',
    badgeClass: 'border-border text-text-muted',
  },
}

export const Certifications = () => (
  <section id="certifications" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[120px]">
    <SectionLabel number="04" label="Certifications" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {resume.certifications.map((group, gi) => {
        const config = groupConfig[group.group as keyof typeof groupConfig]
        return (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
          >
            {/* Group heading */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${config.dotClass}`} />
              <span className={`text-[11px] tracking-[0.1em] uppercase font-mono font-medium ${config.labelClass}`}>
                {group.group}
              </span>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-4">
              {group.items.map((cert) => (
                <div key={cert.name} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-text-primary text-[13px] leading-[1.5] font-medium">
                      {cert.name}
                    </span>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View credential for ${cert.name}`}
                        className="text-text-muted hover:text-accent transition-colors duration-200 flex-shrink-0"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-text-muted text-[11px]">{cert.issuer}</span>
                    {cert.date && (
                      <>
                        <span className="text-text-muted text-[11px]">·</span>
                        <span className="text-text-muted text-[11px]">{cert.date}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  </section>
)
