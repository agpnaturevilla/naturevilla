'use client'

import { useEffect, useState } from 'react'

export const FloatingParticles = ({ count = 20, color = "#7d858c" }) => {
  const [particles, setParticles] = useState([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      direction: Math.random() * Math.PI * 2
    }))
    setParticles(newParticles)
  }, [count])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full transition-all duration-1000 ease-out"
          style={{
            left: `${particle.x + (mousePos.x - 50) * 0.02}%`,
            top: `${particle.y + (mousePos.y - 50) * 0.02}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: particle.opacity,
            animation: `float-${particle.id} ${8 + Math.random() * 4}s infinite linear`,
          }}
        />
      ))}
      
      <style jsx>{`
        ${particles.map(particle => `
          @keyframes float-${particle.id} {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(${Math.sin(particle.direction) * 20}px, ${Math.cos(particle.direction) * 20}px) rotate(90deg); }
            50% { transform: translate(${Math.sin(particle.direction + Math.PI) * 20}px, ${Math.cos(particle.direction + Math.PI) * 20}px) rotate(180deg); }
            75% { transform: translate(${Math.sin(particle.direction + Math.PI * 1.5) * 20}px, ${Math.cos(particle.direction + Math.PI * 1.5) * 20}px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
        `).join('')}
      `}</style>
    </div>
  )
}

export const AnimatedGradientOverlay = ({ colors = ["#7d858c", "#6b7280", "#9ca3af"] }) => (
  <div className="absolute inset-0 pointer-events-none">
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        background: `linear-gradient(45deg, ${colors[0]}10, ${colors[1]}15, ${colors[2]}10)`,
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease infinite'
      }}
    />
    <style jsx>{`
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}</style>
  </div>
)

export const MorphingBlob = ({ className = "", color = "#7d858c", size = 200 }) => (
  <div className={`absolute ${className} pointer-events-none`}>
    <svg width={size} height={size} viewBox="0 0 200 200">
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.1" />
          <stop offset="50%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M100,20 C150,30 180,70 170,120 C160,170 120,190 80,180 C40,170 10,130 20,80 C30,30 70,10 100,20 Z"
        fill="url(#blobGradient)"
        className="morphing-blob"
      />
      <style jsx>{`
        .morphing-blob {
          animation: morphBlob 12s ease-in-out infinite;
        }
        @keyframes morphBlob {
          0%, 100% {
            d: path("M100,20 C150,30 180,70 170,120 C160,170 120,190 80,180 C40,170 10,130 20,80 C30,30 70,10 100,20 Z");
          }
          25% {
            d: path("M100,15 C160,25 185,65 175,115 C165,165 125,185 75,175 C25,165 5,125 15,75 C25,25 65,5 100,15 Z");
          }
          50% {
            d: path("M100,25 C140,35 175,75 165,125 C155,175 115,195 85,185 C55,175 15,135 25,85 C35,35 75,15 100,25 Z");
          }
          75% {
            d: path("M100,18 C155,28 182,68 172,118 C162,168 122,188 78,178 C34,168 8,128 18,78 C28,28 68,8 100,18 Z");
          }
        }
      `}</style>
    </svg>
  </div>
)