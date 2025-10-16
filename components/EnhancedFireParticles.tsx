'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  blur: number
}

interface ParticleLayer {
  particles: Particle[]
  speed: number
  opacity: number
  zIndex: number
  color: string
}

export default function EnhancedFireParticles() {
  const [particleLayers, setParticleLayers] = useState<ParticleLayer[]>([])
  
  useEffect(() => {
    const layers: ParticleLayer[] = [
      // Back layer - 40 particles (slowest, most blurred, deepest)
      {
        particles: Array.from({ length: 40 }).map((_, i) => ({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 8 + Math.random() * 6,
          size: 0.5 + Math.random() * 1,
          blur: 3
        })),
        speed: 1,
        opacity: 0.15,
        zIndex: 1,
        color: 'rgba(255, 69, 0, 0.4)'
      },
      // Mid-back layer - 20 particles
      {
        particles: Array.from({ length: 20 }).map((_, i) => ({
          id: i + 40,
          x: Math.random() * 100,
          delay: Math.random() * 6,
          duration: 6 + Math.random() * 5,
          size: 0.8 + Math.random() * 1.5,
          blur: 2
        })),
        speed: 1.3,
        opacity: 0.25,
        zIndex: 2,
        color: 'rgba(255, 100, 0, 0.5)'
      },
      // Mid-front layer - 10 particles
      {
        particles: Array.from({ length: 10 }).map((_, i) => ({
          id: i + 60,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 4 + Math.random() * 4,
          size: 1 + Math.random() * 2,
          blur: 1
        })),
        speed: 1.6,
        opacity: 0.4,
        zIndex: 3,
        color: 'rgba(255, 120, 0, 0.6)'
      },
      // Front layer - 8 particles (fastest, sharpest, most visible)
      {
        particles: Array.from({ length: 8 }).map((_, i) => ({
          id: i + 70,
          x: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 3,
          size: 1.2 + Math.random() * 2.5,
          blur: 0.5
        })),
        speed: 2,
        opacity: 0.6,
        zIndex: 4,
        color: 'rgba(255, 140, 0, 0.8)'
      }
    ]
    
    setParticleLayers(layers)
  }, [])
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particleLayers.map((layer, layerIndex) => (
        <div 
          key={layerIndex} 
          className="absolute inset-0" 
          style={{ 
            zIndex: layer.zIndex,
            opacity: layer.opacity
          }}
        >
          {layer.particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{ 
                left: `${particle.x}%`,
                bottom: '-10px',
                width: `${particle.size}rem`,
                height: `${particle.size}rem`,
                backgroundColor: layer.color,
                filter: `blur(${particle.blur}px)`,
                boxShadow: `0 0 ${particle.blur * 4}px ${layer.color}`,
                willChange: 'transform, opacity'
              }}
              animate={{
                y: [0, -window.innerHeight * 1.2],
                x: [0, (Math.random() - 0.5) * 80],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0]
              }}
              transition={{
                duration: particle.duration / layer.speed,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
