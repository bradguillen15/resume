export const Tag = ({ label }: { label: string }) => (
  <span
    className="inline-block px-2.5 py-[3px] rounded text-[11px] tracking-[0.04em] font-mono"
    style={{ background: 'var(--color-tag-bg)', color: 'var(--color-tag-text)' }}
  >
    {label}
  </span>
)
