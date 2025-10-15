"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

const Hero = () => {
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background texture for depth */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF4500' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <motion.div
        className="text-center max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight"
          style={{
            textShadow: '0 2px 10px rgba(255, 69, 0, 0.5), 0 4px 20px rgba(255, 69, 0, 0.3), 0 8px 40px rgba(255, 69, 0, 0.1)'
          }}
          variants={itemVariants}
        >
          JESSE ON FIRE
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
