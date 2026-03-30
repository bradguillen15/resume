import { forwardRef } from 'react'

interface Props {
  children: React.ReactNode
}

export const ScrollContainer = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => (
    <main
      ref={ref}
      data-scroll-container
      className="flex-1 xl:h-screen xl:overflow-y-auto overflow-x-hidden"
    >
      {children}
    </main>
  )
)

ScrollContainer.displayName = 'ScrollContainer'
