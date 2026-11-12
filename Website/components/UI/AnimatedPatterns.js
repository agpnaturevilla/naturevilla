'use client'

export const FloatingLines = ({ color = "#7d858c", count = 6 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="absolute inset-0">
          <svg className="w-full h-full opacity-20" preserveAspectRatio="none">
            <path
              d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
              stroke={color}
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

export const RadialPattern = ({ color = "#7d858c", intensity = 0.1 }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, ${color}${Math.floor(intensity * 255).toString(16)} 0%, transparent 50%), 
                         radial-gradient(circle at 75% 75%, ${color}${Math.floor(intensity * 255).toString(16)} 0%, transparent 50%),
                         radial-gradient(circle at 50% 50%, ${color}${Math.floor(intensity * 255).toString(16)} 0%, transparent 70%)`,
        backgroundSize: '50% 50%, 60% 60%, 80% 80%',
        animation: 'patternShift 15s ease-in-out infinite alternate'
      }}
    >
      <style jsx>{`
        @keyframes patternShift {
          0% { transform: scale(1) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.1) rotate(2deg); opacity: 0.7; }
          100% { transform: scale(1.05) rotate(-1deg); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}

export const GeometricGrid = ({ color = "#7d858c", opacity = 0.1, size = 40 }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(${color}${Math.floor(opacity * 255).toString(16)} 1px, transparent 1px),
          linear-gradient(90deg, ${color}${Math.floor(opacity * 255).toString(16)} 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        animation: 'gridMove 20s linear infinite'
      }}
    >
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${size}px, ${size}px); }
        }
      `}</style>
    </div>
  )
}

export const WavePattern = ({ color = "#7d858c", amplitude = 20, frequency = 0.02 }) => {
  const wavePoints = []
  for (let x = 0; x <= 100; x += 2) {
    const y = 50 + Math.sin(x * frequency * Math.PI) * amplitude
    wavePoints.push(`${x},${y}`)
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Multiple wave layers */}
        <polyline
          points={wavePoints.join(' ')}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          className="animate-pulse"
        />
        
        <polyline
          points={wavePoints.map(p => {
            const [x, y] = p.split(',')
            return `${x},${parseFloat(y) + 10}`
          }).join(' ')}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        <polyline
          points={wavePoints.map(p => {
            const [x, y] = p.split(',')
            return `${x},${parseFloat(y) - 15}`
          }).join(' ')}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>
    </div>
  )
}

export const ConstellationPattern = ({ color = "#7d858c", starCount = 20 }) => {
  const stars = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.6 + 0.2,
    delay: Math.random() * 3
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <filter id="starGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Connection lines */}
        {stars.slice(0, -1).map((star, i) => {
          const nextStar = stars[i + 1]
          const distance = Math.sqrt(
            Math.pow(star.x - nextStar.x, 2) + Math.pow(star.y - nextStar.y, 2)
          )
          
          if (distance < 25) { // Only connect nearby stars
            return (
              <line
                key={`line-${i}`}
                x1={`${star.x}%`}
                y1={`${star.y}%`}
                x2={`${nextStar.x}%`}
                y2={`${nextStar.y}%`}
                stroke={color}
                strokeWidth="0.5"
                opacity="0.2"
                className="animate-pulse"
                style={{ animationDelay: `${star.delay}s` }}
              />
            )
          }
          return null
        })}
        
        {/* Stars */}
        {stars.map(star => (
          <circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill={color}
            opacity={star.opacity}
            filter="url(#starGlow)"
            className="animate-pulse"
            style={{ 
              animationDelay: `${star.delay}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </svg>
    </div>
  )
}