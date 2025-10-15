'use client'
import { motion } from 'framer-motion'

export default function FloorFlames() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none overflow-hidden">
      {/* Animated flame gradient base */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(255, 69, 0, 0.4) 0%, rgba(255, 100, 0, 0.3) 20%, rgba(255, 140, 0, 0.2) 40%, rgba(255, 180, 0, 0.1) 60%, transparent 100%)',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Flame shapes using SVG filters */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.25 }}>
        <defs>
          <filter id="flame-turbulence">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.3" 
              numOctaves="3" 
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                values="0.01 0.3; 0.015 0.35; 0.01 0.3"
                dur="4s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="turbulence" 
              scale="30" 
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#flame-gradient)" 
          filter="url(#flame-turbulence)"
        />
        <defs>
          <linearGradient id="flame-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(255, 69, 0)', stopOpacity: 0.6 }} />
            <stop offset="30%" style={{ stopColor: 'rgb(255, 120, 0)', stopOpacity: 0.4 }} />
            <stop offset="60%" style={{ stopColor: 'rgb(255, 180, 0)', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(255, 220, 0)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Additional flame flicker particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${(i / 15) * 100}%`,
            width: '4rem',
            height: '4rem',
            background: 'radial-gradient(circle, rgba(255, 100, 0, 0.6) 0%, rgba(255, 140, 0, 0.3) 40%, transparent 70%)',
            filter: 'blur(8px)'
          }}
          animate={{
            y: [0, -40, -20, -60, 0],
            scale: [1, 1.3, 0.9, 1.2, 1],
            opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
            x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 25, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
