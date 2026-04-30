import { useState, useRef, useEffect } from 'react'

export function useCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"]'
    )
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return { dotRef, ringRef, hovered }
}
