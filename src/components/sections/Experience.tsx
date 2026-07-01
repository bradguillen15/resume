import { motion } from "framer-motion"
import { resume } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Tag } from "@/components/ui/Tag"

function employmentMeta(
  employmentType: string | null,
  workMode: string | null,
  place: string | null,
): string | null {
  const parts = [employmentType, workMode, place].filter(Boolean)
  return parts.length > 0 ? parts.join(' · ') : null
}

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

          {exp.roles ? (
            <>
              {/* Grouped company header (LinkedIn-style: one company, multiple roles) */}
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <div>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-[16px] sm:text-[18px] font-semibold text-accent hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="font-display text-[16px] sm:text-[18px] font-semibold text-accent">
                      {exp.company}
                    </span>
                  )}
                  {employmentMeta(exp.employmentType, exp.workMode, exp.place) && (
                    <div className="text-text-muted text-[11px] mt-0.5">
                      {employmentMeta(exp.employmentType, exp.workMode, exp.place)}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-text-secondary text-[12px]">{exp.period}</div>
                  <div className="text-text-muted text-[11px]">{exp.duration}</div>
                </div>
              </div>

              <div className="ml-1 pl-5 border-l border-border space-y-5 mb-4">
                {exp.roles.map((r, ri) => (
                  <div key={ri} className="relative">
                    <span className="absolute -left-[23px] top-[5px] w-[7px] h-[7px] rounded-full bg-bg-hover border border-border-strong" />
                    <div className="flex justify-between items-start flex-wrap gap-x-2">
                      <h4 className="font-display text-[15px] font-semibold text-text-primary">
                        {r.role}
                      </h4>
                      <div className="text-right">
                        <div className="text-text-secondary text-[12px]">{r.period}</div>
                        <div className="text-text-muted text-[11px]">{r.duration}</div>
                      </div>
                    </div>
                    <ul className="list-none mt-1.5">
                      {r.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-text-secondary text-[13px] leading-[1.8] pl-4 relative mb-1"
                        >
                          <span className="absolute left-0 text-text-muted">–</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <div>
                  <h3 className="font-display text-[18px] sm:text-[20px] font-semibold text-text-primary mb-0.5">
                    {exp.role}
                  </h3>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent text-[13px] hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-accent text-[13px]">{exp.company}</span>
                  )}
                  {employmentMeta(exp.employmentType, exp.workMode, exp.place) && (
                    <div className="text-text-muted text-[11px] mt-0.5">
                      {employmentMeta(exp.employmentType, exp.workMode, exp.place)}
                    </div>
                  )}
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
            </>
          )}

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
