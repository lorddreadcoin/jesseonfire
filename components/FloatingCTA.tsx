"use client";

import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { LINKS } from "@/lib/constants";
import { useEffect, useState } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <motion.a
        href={LINKS.patreon}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.5, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Button */}
        <div className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-5 rounded-full shadow-2xl flex items-center gap-3 font-bold text-lg">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <FaFire className="w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <span className="whitespace-nowrap text-sm opacity-90">🔥 LIMITED SPOTS</span>
            <span className="whitespace-nowrap font-black">Join the Fire</span>
          </div>
          <motion.span
            className="text-2xl"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            →
          </motion.span>
        </div>

        {/* Hover fire particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: [0, 1, 0],
                y: [-20, -40],
                x: [0, (i - 2) * 10],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                repeat: Infinity,
              }}
              style={{
                left: '50%',
                bottom: '50%',
              }}
            />
          ))}
        </div>
      </motion.a>
    </motion.div>
  );
};

export default FloatingCTA;
