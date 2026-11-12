'use client'

export const FloralOrnament = ({ className = "", color = "#7d858c", size = 100 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="floralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
        <stop offset="50%" stopColor={color} stopOpacity="0.6" />
        <stop offset="100%" stopColor={color} stopOpacity="0.3" />
      </linearGradient>
    </defs>
    
    {/* Central flower */}
    <circle cx="50" cy="50" r="8" fill="url(#floralGradient)" />
    
    {/* Petals */}
    <ellipse cx="50" cy="35" rx="4" ry="12" fill="url(#floralGradient)" />
    <ellipse cx="50" cy="65" rx="4" ry="12" fill="url(#floralGradient)" />
    <ellipse cx="35" cy="50" rx="12" ry="4" fill="url(#floralGradient)" />
    <ellipse cx="65" cy="50" rx="12" ry="4" fill="url(#floralGradient)" />
    
    {/* Diagonal petals */}
    <ellipse cx="42" cy="42" rx="8" ry="3" fill="url(#floralGradient)" transform="rotate(-45 42 42)" />
    <ellipse cx="58" cy="58" rx="8" ry="3" fill="url(#floralGradient)" transform="rotate(-45 58 58)" />
    <ellipse cx="58" cy="42" rx="8" ry="3" fill="url(#floralGradient)" transform="rotate(45 58 42)" />
    <ellipse cx="42" cy="58" rx="8" ry="3" fill="url(#floralGradient)" transform="rotate(45 42 58)" />
    
    {/* Decorative dots */}
    <circle cx="50" cy="25" r="2" fill={color} opacity="0.4" />
    <circle cx="50" cy="75" r="2" fill={color} opacity="0.4" />
    <circle cx="25" cy="50" r="2" fill={color} opacity="0.4" />
    <circle cx="75" cy="50" r="2" fill={color} opacity="0.4" />
  </svg>
)

export const VineOrnament = ({ className = "", color = "#7d858c", width = 200, height = 100 }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 200 100" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="vineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={color} stopOpacity="0.2" />
        <stop offset="50%" stopColor={color} stopOpacity="0.6" />
        <stop offset="100%" stopColor={color} stopOpacity="0.2" />
      </linearGradient>
    </defs>
    
    {/* Main vine curve */}
    <path 
      d="M10,50 Q50,20 90,50 T170,50" 
      stroke="url(#vineGradient)" 
      strokeWidth="3" 
      fill="none"
    />
    
    {/* Leaves */}
    <ellipse cx="30" cy="35" rx="8" ry="4" fill="url(#vineGradient)" transform="rotate(-30 30 35)" />
    <ellipse cx="70" cy="65" rx="8" ry="4" fill="url(#vineGradient)" transform="rotate(30 70 65)" />
    <ellipse cx="110" cy="35" rx="8" ry="4" fill="url(#vineGradient)" transform="rotate(-30 110 35)" />
    <ellipse cx="150" cy="65" rx="8" ry="4" fill="url(#vineGradient)" transform="rotate(30 150 65)" />
    
    {/* Small decorative elements */}
    <circle cx="50" cy="45" r="3" fill={color} opacity="0.3" />
    <circle cx="130" cy="55" r="3" fill={color} opacity="0.3" />
  </svg>
)

export const GeometricOrnament = ({ className = "", color = "#7d858c", size = 120 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 120 120" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="geometricGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.1" />
        <stop offset="70%" stopColor={color} stopOpacity="0.4" />
        <stop offset="100%" stopColor={color} stopOpacity="0.1" />
      </radialGradient>
    </defs>
    
    {/* Outer ring */}
    <circle cx="60" cy="60" r="55" fill="none" stroke={color} strokeWidth="1" opacity="0.3" />
    <circle cx="60" cy="60" r="45" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
    <circle cx="60" cy="60" r="35" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
    
    {/* Inner geometric pattern */}
    <polygon 
      points="60,25 80,50 60,75 40,50" 
      fill="url(#geometricGradient)" 
      stroke={color} 
      strokeWidth="1" 
      opacity="0.6"
    />
    
    {/* Decorative dots */}
    <circle cx="60" cy="15" r="3" fill={color} opacity="0.4" />
    <circle cx="60" cy="105" r="3" fill={color} opacity="0.4" />
    <circle cx="15" cy="60" r="3" fill={color} opacity="0.4" />
    <circle cx="105" cy="60" r="3" fill={color} opacity="0.4" />
  </svg>
)

export const CurvedDivider = ({ className = "", color = "#7d858c", flip = false }) => (
  <svg 
    width="100%" 
    height="100" 
    viewBox="0 0 1200 100" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
  >
    <defs>
      <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={color} stopOpacity="0.1" />
        <stop offset="50%" stopColor={color} stopOpacity="0.3" />
        <stop offset="100%" stopColor={color} stopOpacity="0.1" />
      </linearGradient>
    </defs>
    
    <path 
      d="M0,80 C300,20 600,20 900,40 C1050,50 1150,60 1200,80 L1200,100 L0,100 Z" 
      fill="url(#dividerGradient)"
    />
    
    {/* Decorative wave line */}
    <path 
      d="M0,70 Q300,30 600,45 T1200,70" 
      stroke={color} 
      strokeWidth="2" 
      fill="none" 
      opacity="0.4"
    />
  </svg>
)