'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FlameCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [flameParticles, setFlameParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add flame trail particles randomly
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20
        }
        setFlameParticles(prev => [...prev.slice(-8), newParticle])
      }
    }
    
    const handleMouseDown = () => {
      setIsClicking(true)
      setTimeout(() => setIsClicking(false), 400)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Flame trail particles */}
      <AnimatePresence>
        {flameParticles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.8) 0%, rgba(255, 69, 0, 0.4) 50%, transparent 100%)',
              boxShadow: '0 0 10px rgba(255, 100, 0, 0.6)'
            }}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ 
              opacity: 0,
              scale: 0,
              y: -30
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
      
      {/* Main flame cursor */}
      <motion.div
        className="absolute"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: isClicking ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <AnimatePresence mode="wait">
          {isClicking ? (
            // Muscle emoji on click
            <motion.div
              key="muscle"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1.8, rotate: 0 }}
              exit={{ scale: 0, rotate: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-4xl"
            >
              💪
            </motion.div>
          ) : (
            // Animated flame
            <motion.div
              key="flame"
              className="relative w-8 h-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Core flame */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(255, 69, 0, 0.9) 0%, rgba(255, 140, 0, 0.7) 50%, rgba(255, 200, 0, 0.5) 100%)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  filter: 'blur(2px)',
                  boxShadow: '0 0 20px rgba(255, 100, 0, 0.8), inset 0 0 10px rgba(255, 200, 100, 0.6)'
                }}
                animate={{
                  scale: [1, 1.15, 0.95, 1.1, 1],
                  rotate: [0, 3, -3, 2, 0],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Inner bright core */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 200, 0.9) 0%, rgba(255, 200, 100, 0.6) 30%, transparent 60%)',
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '60%'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Flickering tip */}
              <motion.div
                className="absolute"
                style={{
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '16px',
                  background: 'linear-gradient(to top, rgba(255, 140, 0, 0.7) 0%, rgba(255, 220, 100, 0.5) 100%)',
                  borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%',
                  filter: 'blur(1px)'
                }}
                animate={{
                  scaleY: [1, 1.3, 0.8, 1.2, 1],
                  scaleX: [1, 0.8, 1.1, 0.9, 1],
                  y: [0, -2, 1, -1, 0],
                  opacity: [0.7, 1, 0.8, 1, 0.7]
                }}
                transition={{
                  duration: 0.35,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
