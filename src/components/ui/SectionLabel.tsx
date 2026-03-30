interface Props {
  number: string
  label: string
}

export const SectionLabel = ({ number, label }: Props) => (
  <div className="flex items-center gap-3 mb-12">
    <span className="text-accent font-mono text-[11px]">{number}</span>
    <div className="h-px w-8 bg-border-strong" />
    <span className="text-text-secondary text-[11px] tracking-[0.12em] uppercase">
      {label}
    </span>
  </div>
)
