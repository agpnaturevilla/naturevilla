'use client'

export const WaveDivider = ({ flip = false, color = "#7d858c" }) => (
  <div className={`relative w-full h-16 ${flip ? 'transform rotate-180' : ''}`}>
    <svg 
      className="absolute bottom-0 overflow-hidden" 
      xmlns="http://www.w3.org/2000/svg" 
      preserveAspectRatio="none" 
      version="1.1" 
      viewBox="0 0 2560 100" 
      x="0" 
      y="0"
      style={{ width: '100%', height: '100%' }}
    >
      <polygon 
        fill={color} 
        opacity="0.3" 
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
)

export const GeometricDivider = ({ color = "#7d858c", style = "diamond" }) => (
  <div className="relative w-full h-8 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      {style === "diamond" && (
        <div className="flex items-center space-x-4">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent to-gray-300"></div>
          <div 
            className="w-4 h-4 rotate-45 shadow-lg"
            style={{ backgroundColor: color }}
          ></div>
          <div className="w-6 h-6 rotate-45 bg-gradient-to-br from-primary-400 to-accent-400"></div>
          <div 
            className="w-4 h-4 rotate-45 shadow-lg"
            style={{ backgroundColor: color }}
          ></div>
          <div className="w-24 h-1 bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>
      )}
      
      {style === "dots" && (
        <div className="flex items-center space-x-3">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
          <div className="w-3 h-3 rounded-full bg-primary-500"></div>
          <div className="w-4 h-4 rounded-full bg-primary-600"></div>
          <div className="w-3 h-3 rounded-full bg-primary-500"></div>
          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
          <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>
      )}
    </div>
  </div>
)

export const FloralDivider = ({ color = "#7d858c" }) => (
  <div className="relative w-full h-12 overflow-hidden">
    <svg 
      className="w-full h-full" 
      viewBox="0 0 400 48" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="floralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="50%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Curved line */}
      <path 
        d="M0,24 Q100,12 200,24 T400,24" 
        stroke="url(#floralGrad)" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Central flower */}
      <g transform="translate(200,24)">
        <circle r="6" fill={color} opacity="0.4" />
        <circle r="3" fill={color} opacity="0.8" />
        <circle cx="0" cy="-8" r="2" fill={color} opacity="0.6" />
        <circle cx="8" cy="0" r="2" fill={color} opacity="0.6" />
        <circle cx="0" cy="8" r="2" fill={color} opacity="0.6" />
        <circle cx="-8" cy="0" r="2" fill={color} opacity="0.6" />
      </g>
      
      {/* Side elements */}
      <g transform="translate(120,24)">
        <circle r="3" fill={color} opacity="0.5" />
        <circle cx="0" cy="-4" r="1" fill={color} opacity="0.7" />
        <circle cx="4" cy="0" r="1" fill={color} opacity="0.7" />
      </g>
      
      <g transform="translate(280,24)">
        <circle r="3" fill={color} opacity="0.5" />
        <circle cx="0" cy="-4" r="1" fill={color} opacity="0.7" />
        <circle cx="-4" cy="0" r="1" fill={color} opacity="0.7" />
      </g>
    </svg>
  </div>
)

export const GradientDivider = ({ 
  colors = ["#7d858c", "#6366f1", "#7d858c"], 
  height = "h-1" 
}) => (
  <div className="relative w-full">
    <div 
      className={`w-full ${height} bg-gradient-to-r opacity-60`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors[0]}00, ${colors[1]}, ${colors[2]}00)`
      }}
    ></div>
    <div 
      className={`absolute inset-0 ${height} bg-gradient-to-r opacity-30 blur-sm`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors[0]}00, ${colors[1]}, ${colors[2]}00)`
      }}
    ></div>
  </div>
)