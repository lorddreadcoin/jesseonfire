'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  delay: number
  duration: number
}

export default function FireParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }))
    setParticles(newParticles)
  }, [])
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-fire-orange rounded-full"
          style={{ left: `${particle.x}%`, bottom: '-10px' }}
          animate={{
            y: [0, -800],
            opacity: [0, 1, 1, 0],
            scale: [0, 1.5, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}
