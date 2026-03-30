import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const CustomCursor = () => {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { stiffness: 200, damping: 20, mass: 0.1 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      setIsHovering(!!target.closest('a, button, [role="button"], input, textarea'))
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY, isVisible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Inner dot — instant follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 0 : 6,
          height: isHovering ? 0 : 6,
          background: 'var(--color-accent)',
          transition: 'width 150ms, height 150ms',
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Outer ring — spring lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
          border: '1px solid var(--color-accent)',
          background: isHovering ? 'var(--color-accent-glow)' : 'transparent',
          opacity: isVisible ? (isHovering ? 0.6 : 0.5) : 0,
          transition: 'width 200ms, height 200ms, background 200ms, opacity 200ms',
        }}
      />
    </>
  )
}
