"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, LINKS } from "@/lib/constants";
import { useEffect, useState, useMemo } from "react";
import { FaFire, FaYoutube, FaDiscord } from "react-icons/fa";

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
      >
        <motion.h1 
          className="font-display text-7xl md:text-8xl lg:text-9xl mb-6 relative tracking-wider"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {/* Fire glow layers */}
          <motion.span
            className="absolute inset-0 text-fire-orange blur-xl opacity-60"
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.02, 1]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            JESSE ON FIRE
          </motion.span>
          
          <motion.span
            className="absolute inset-0 text-lava-red blur-md opacity-50"
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.01, 1]
            }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          >
            JESSE ON FIRE
          </motion.span>
          
          <span className="relative bg-fire-gradient bg-clip-text text-transparent drop-shadow-2xl">
            JESSE ON FIRE
          </span>
        </motion.h1>

        {/* Tagline - CINEMATIC */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-heading text-3xl lg:text-4xl text-fire-orange mb-4 uppercase tracking-wide">
            {SITE_CONFIG.tagline}
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-20 h-1 bg-fire-gradient"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Description - CINEMATIC */}
        <motion.p
          className="font-sans text-xl lg:text-2xl text-ash-grey max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {SITE_CONFIG.description}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <motion.a 
            href={LINKS.patreon} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn-fire text-xl px-8 py-4 flex items-center gap-3">
              <FaFire className="text-2xl" />
              Join the Patreon
            </button>
          </motion.a>
          
          <motion.a 
            href={LINKS.discord} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-electric-steel/20 border-2 border-electric-steel text-electric-steel font-display uppercase px-8 py-4 rounded-xl shadow-lg hover:bg-electric-steel/30 hover:shadow-electric-steel/50 transition-all text-xl flex items-center gap-3">
              <FaDiscord className="text-2xl" />
              Enter Discord
            </button>
          </motion.a>
          
          <motion.a 
            href={LINKS.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-lava-red/20 border-2 border-lava-red text-white font-display uppercase px-8 py-4 rounded-xl shadow-lg hover:bg-lava-red/30 hover:shadow-lava-red/50 transition-all text-xl flex items-center gap-3">
              <FaYoutube className="text-2xl" />
              Watch on YouTube
            </button>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
