'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  size: number
  speed: number
  delay: number
  hue: number
}

function makeParticles(count: number, seed: number): Particle[] {
  const particles: Particle[] = []
  for (let i = 0; i < count; i++) {
    const r = Math.sin(seed + i) * 0.5 + 0.5
    particles.push({
      id: i,
      x: Math.random() * 100,
      size: 6 + Math.random() * 18,
      speed: 12 + Math.random() * 22,
      delay: Math.random() * 2,
      hue: 15 + r * 35,
    })
  }
  return particles
}

export default function FireScroll() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(Math.min(1, Math.max(0, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Particles completely disabled
  const layerCounts = useMemo(() => {
    // No particles at all
    const base = [0, 0, 0, 0]
    return base.map((n, i) => Math.round(n * (1 + progress * (i + 1) * 0.3)))
  }, [progress])

  const layers = layerCounts.map((count, idx) => ({
    count,
    blur: 12 - idx * 2,
    opacity: 0.08 + idx * 0.03 + progress * 0.05, // Much lower opacity
    speedScale: 0.6 + idx * 0.25 + progress * 0.2,
    zIndex: -20 - idx,
    particles: makeParticles(count, idx + 1),
  }))

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      {layers.map((layer, li) => (
        <div key={li} className="absolute inset-0">
          {layer.particles.map((p) => (
            <motion.div
              key={`${li}-${p.id}`}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                bottom: -40,
                width: p.size,
                height: p.size,
                background: `radial-gradient(circle, hsla(${p.hue},100%,60%,0.85) 0%, hsla(${p.hue+15},100%,50%,0.45) 45%, transparent 70%)`,
                filter: `blur(${Math.max(1, layer.blur)}px)`
              }}
              animate={{
                y: [0, -140 * layer.speedScale],
                x: [0, (Math.random() - 0.5) * 40],
                opacity: [0, layer.opacity, 0],
                scale: [0.7, 1.1, 0.9]
              }}
              transition={{
                duration: p.speed / (1 + progress * 0.5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay
              }}
            />
          ))}
        </div>
      ))}

      {/* subtle gradient heat overlay that strengthens on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(255,80,20,0.08) 0%, transparent 60%)'
        }}
        animate={{ opacity: 0.2 + progress * 0.4 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}
