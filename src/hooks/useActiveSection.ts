import { useState, useEffect, type RefObject } from 'react'
import { BREAKPOINT_XL } from '@/lib/breakpoints'

export function useActiveSection(
  containerRef: RefObject<HTMLDivElement | null>,
  sectionIds: string[]
): string {
  const [active, setActive] = useState(sectionIds[0])
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(BREAKPOINT_XL).matches,
  )

  useEffect(() => {
    const media = window.matchMedia(BREAKPOINT_XL)
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

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
