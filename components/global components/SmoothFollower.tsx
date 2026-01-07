"use client"
import { useState, useEffect, useRef } from "react"

export default function SmoothFollower() {
  const mousePosition = useRef({ x: 0, y: 0 })
  const dotPosition = useRef({ x: 0, y: 0 })
  const borderDotPosition = useRef({ x: 0, y: 0 })
  const [renderPos, setRenderPos] = useState({ dot: { x: 0, y: 0 }, border: { x: 0, y: 0 } })
  const [isHovering, setIsHovering] = useState(false)
  
  const DOT_SMOOTHNESS = 0.2
  const BORDER_DOT_SMOOTHNESS = 0.1

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    
    // Hide cursor globally with CSS
    const style = document.createElement('style')
    style.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
      html, body {
        cursor: none !important;
      }
      a, button, input, textarea, select, [role="button"], img {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)
    
    const interactiveElements = document.querySelectorAll("a, button, img, input, textarea, select, [role='button']")
    interactiveElements.forEach((element) => {
      // Force cursor none on each element
      (element as HTMLElement).style.cursor = 'none'
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    // Animation function for smooth movement
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor
      }

      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS)
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS)

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS)
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS)

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      })

      requestAnimationFrame(animate)
    }

    // Start animation loop
    const animationId = requestAnimationFrame(animate)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      
      // Remove the custom style
      document.head.removeChild(style)
      
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Don't render on server or mobile devices
  if (typeof window === "undefined") return null
  
  // Optional: Disable on mobile for better performance
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isMobile) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100000]">
      {/* Center dot with your custom color */}
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: '#F6F6F7',
          width: "7px",
          height: "7px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />
      {/* Border circle with your custom color */}
      <div
        className="absolute rounded-full border-2"
        style={{
          borderColor: '#2AFF5F',
          width: isHovering ? "44px" : "28px",
          height: isHovering ? "44px" : "28px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: "width 0.3s ease-out, height 0.3s ease-out",
        }}
      />
    </div>
  )
}