'use client'

import { useState, useEffect } from 'react'

export const HoverRevealOverlay = ({ children, overlayContent, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-800/90 backdrop-blur-sm transition-all duration-500 flex items-center justify-center ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}>
        <div className="text-center text-white p-6">
          {overlayContent}
        </div>
      </div>
    </div>
  )
}

export const ParallaxIllustration = ({ children, speed = 0.5, className = "" }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      className={`relative ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}

export const GlowingBorder = ({ children, glowColor = "#7d858c", className = "" }) => (
  <div className={`relative group ${className}`}>
    <div 
      className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"
      style={{ 
        backgroundImage: `linear-gradient(45deg, ${glowColor}40, ${glowColor}80, ${glowColor}40)`,
        animation: 'borderGlow 3s ease infinite'
      }}
    />
    <div className="relative bg-white rounded-lg">
      {children}
    </div>
    <style jsx>{`
      @keyframes borderGlow {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
    `}</style>
  </div>
)

export const MagneticEffect = ({ children, strength = 0.3, className = "" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export const RippleEffect = ({ children, className = "" }) => {
  const [ripples, setRipples] = useState([])

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    }

    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 1000)
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onClick={addRipple}
    >
      {children}
      
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-primary-500/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animation: 'ripple 1s ease-out forwards'
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes ripple {
          0% {
            opacity: 1;
            transform: scale(0);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}

export const TextRevealAnimation = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className={`transition-all duration-800 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}