import type { ReactNode } from 'react'

interface BrowserFrameProps {
  url: string | null
  children: ReactNode
}

function displayAddress(url: string): string {
  try {
    const { hostname, pathname } = new URL(url)
    const path = pathname === '/' ? '' : pathname.replace(/\/$/, '')
    return `${hostname}${path}`
  } catch {
    return url
  }
}

export const BrowserFrame = ({ url, children }: BrowserFrameProps) => (
  <div className="flex h-full flex-col">
    <div className="flex h-7 flex-shrink-0 items-center gap-3 border-b border-border bg-bg-hover px-3">
      <div className="flex gap-1.5" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-[#f87171]" />
        <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
        <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
      </div>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="min-w-0 flex-1 truncate rounded bg-bg-primary/60 px-2 py-0.5 text-center font-mono text-[10px] text-text-muted transition-colors duration-200 hover:text-accent"
        >
          {displayAddress(url)}
        </a>
      ) : (
        <span className="min-w-0 flex-1 truncate rounded bg-bg-primary/60 px-2 py-0.5 text-center font-mono text-[10px] text-text-muted">
          localhost
        </span>
      )}
    </div>
    <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
  </div>
)
