import { SkillIconImage } from '@/components/icons/SkillIconImage'
import { hasSkillIcon } from '@/lib/skillIcons'

export const Tag = ({ label }: { label: string }) => (
  <span
    className="inline-flex items-center gap-1.5 px-2.5 py-[3px] rounded text-[11px] tracking-[0.04em] font-mono"
    style={{ background: 'var(--color-tag-bg)', color: 'var(--color-tag-text)' }}
  >
    {hasSkillIcon(label) && <SkillIconImage name={label} size={12} className="flex-shrink-0" />}
    {label}
  </span>
)
