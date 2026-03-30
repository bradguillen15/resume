import { useState, useEffect, type RefObject } from 'react'

export function useActiveSection(
  containerRef: RefObject<HTMLDivElement | null>,
  sectionIds: string[]
): string {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    // On desktop (≥1280px) the right panel scrolls; on mobile the body scrolls.
    // IntersectionObserver root must match the actual scroller.
    const isDesktop = window.innerWidth >= 1280
    const container = isDesktop ? (containerRef.current ?? null) : null

    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        {
          root: container,
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [containerRef, sectionIds])

  return active
}
