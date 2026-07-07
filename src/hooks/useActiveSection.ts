import { useState, useEffect, type RefObject } from 'react'
import { BREAKPOINT_XL } from '@/lib/breakpoints'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function useActiveSection(
  containerRef: RefObject<HTMLDivElement | null>,
  sectionIds: string[]
): string {
  const [active, setActive] = useState(sectionIds[0])
  const isDesktop = useMediaQuery(BREAKPOINT_XL)

  useEffect(() => {
    const container = isDesktop ? (containerRef.current ?? null) : null

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { root: container, rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [containerRef, sectionIds, isDesktop])

  return active
}
