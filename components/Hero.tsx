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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
          variants={itemVariants}
        >
          JESSE ON FIRE
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-6"
          variants={itemVariants}
        >
          {SITE_CONFIG.tagline}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href={LINKS.patreon}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="primary" className="w-full sm:w-auto">
              Join the Patreon
            </Button>
          </a>

          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="secondary" className="w-full sm:w-auto">
              Enter Discord
            </Button>
          </a>

          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="ghost" className="w-full sm:w-auto">
              Watch on YouTube
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
