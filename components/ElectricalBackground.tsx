'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ElectricalBackground() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  // Generate random lightning path
  const generateLightningPath = (startX: number, startY: number, segments: number) => {
    let path = `M ${startX} ${startY}` 
    let currentX = startX
    let currentY = startY

    for (let i = 0; i < segments; i++) {
      currentX += (Math.random() - 0.5) * 60
      currentY += Math.random() * 80 + 40
      path += ` L ${currentX} ${currentY}` 
    }

    return path
  }

  // Create multiple lightning bolts at different positions
  const lightningBolts = [
    { id: 1, path: generateLightningPath(dimensions.width * 0.7, 0, 8), delay: 0 },
    { id: 2, path: generateLightningPath(dimensions.width * 0.8, 0, 6), delay: 2 },
    { id: 3, path: generateLightningPath(dimensions.width * 0.9, 0, 7), delay: 4 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient base */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 70% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 70%, rgba(255, 69, 0, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Electrical grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            backgroundPosition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            opacity: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* SVG Lightning Bolts */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ mixBlendMode: 'screen' }}
      >
        <defs>
          {/* Glow filter for lightning */}
          <filter id="lightning-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {lightningBolts.map((bolt) => (
          <motion.path
            key={bolt.id}
            d={bolt.path}
            stroke="rgba(59, 130, 246, 0.8)"
            strokeWidth="2"
            fill="none"
            filter="url(#lightning-glow)"
            initial={{ 
              pathLength: 0,
              opacity: 0 
            }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 5,
              delay: bolt.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Secondary smaller bolts */}
        {lightningBolts.map((bolt) => (
          <motion.path
            key={`secondary-${bolt.id}`}
            d={generateLightningPath(
              dimensions.width * (0.65 + Math.random() * 0.1),
              50,
              4
            )}
            stroke="rgba(139, 92, 246, 0.5)"
            strokeWidth="1"
            fill="none"
            filter="url(#lightning-glow)"
            initial={{ 
              pathLength: 0,
              opacity: 0 
            }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.4, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 7,
              delay: bolt.delay + 1,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Floating energy particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${50 + Math.random() * 40}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 
              ? 'rgba(59, 130, 246, 0.6)' 
              : i % 3 === 1
              ? 'rgba(139, 92, 246, 0.6)'
              : 'rgba(255, 69, 0, 0.4)',
            boxShadow: `0 0 10px currentColor` 
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Horizontal energy waves */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.line
            key={`wave-${i}`}
            x1="0"
            y1={`${30 + i * 25}%`}
            x2="100%"
            y2={`${30 + i * 25}%`}
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="1"
            strokeDasharray="10 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
      </svg>

      {/* Pulsing electrical nodes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 rounded-full border-2 border-blue-400"
          style={{
            left: `${60 + Math.random() * 30}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            boxShadow: [
              '0 0 5px rgba(59, 130, 246, 0.5)',
              '0 0 20px rgba(59, 130, 246, 0.8)',
              '0 0 5px rgba(59, 130, 246, 0.5)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
