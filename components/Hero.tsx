"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { useEffect, useState, useMemo } from "react";

const Hero = () => {
  const [isLive, setIsLive] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(516000);
  const [mounted, setMounted] = useState(false);
  
  // Generate stable particle positions
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      initialX: `${(i * 5) % 100}%`,
      animateX: `${((i * 7) + 30) % 100}%`,
      duration: 10 + (i % 10) * 2,
      delay: (i % 5) * 2
    }));
  }, []);
  
  useEffect(() => {
    setMounted(true);
    // Animate subscriber count on mount
    const interval = setInterval(() => {
      setSubscriberCount((prev) => {
        const increment = Math.floor(Math.random() * 3);
        return prev + increment;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Fire Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      {/* Animated Fire Particles */}
      {mounted && (
        <div className="absolute inset-0 z-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-60"
              initial={{ 
                x: particle.initialX,
                y: "110%"
              }}
              animate={{ 
                y: "-10%",
                x: particle.animateX
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay
              }}
            />
          ))}
        </div>
      )}
      {/* Simple Subscriber Counter */}
      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30">
          <span className="text-orange-500 font-bold">
            516K+ Subscribers
          </span>
        </div>
      </motion.div>
      
      {/* Live Indicator */}
      {isLive && (
        <motion.div 
          className="absolute top-8 right-8 z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full shadow-2xl">
            <motion.div
              className="w-3 h-3 bg-white rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <span className="text-white font-bold text-sm">LIVE NOW</span>
          </div>
        </motion.div>
      )}
      
      <motion.div
        className="text-center max-w-5xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ willChange: 'transform' }}
      >
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 mb-8 tracking-tight relative"
          style={{
            textShadow: '0 0 40px rgba(255, 69, 0, 0.8), 0 0 80px rgba(255, 69, 0, 0.6), 0 0 120px rgba(255, 69, 0, 0.4)',
            WebkitTextStroke: '1px rgba(255, 69, 0, 0.3)'
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative">
            JESSE ON FIRE
            <motion.span
              className="absolute inset-0 text-orange-500 blur-md opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              JESSE ON FIRE
            </motion.span>
          </span>
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-8"
          style={{
            textShadow: '0 2px 8px rgba(255, 69, 0, 0.3)'
          }}
          variants={itemVariants}
        >
          {SITE_CONFIG.tagline}
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href={LINKS.patreon}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold">
              Join the Patreon
            </Button>
          </a>

          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold">
              Enter Discord
            </Button>
          </a>

          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="ghost" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold">
              Watch on YouTube
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
