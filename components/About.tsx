"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BIO } from "@/lib/constants";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Fallback gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-500 rounded-2xl" />
            
            {/* Fire effect overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl" />
            
            {/* Text overlay as image placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white rounded-2xl border-2 border-orange-500/20">
              <span className="text-6xl mb-4">🔥</span>
              <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">JESSE</h3>
              <h4 className="text-3xl font-bold text-white/90">ON FIRE</h4>
              <p className="text-sm text-white/70 mt-2">Black Belt on the Mat & Mic</p>
            </div>
            
            {/* Try to load actual image with fallback */}
            <Image
              src="/images/jesse-portrait.jpg"
              alt="Jesse ON FIRE"
              width={600}
              height={600}
              className="rounded-2xl border-2 border-orange-500/20 object-cover relative z-10"
              priority
              onError={(e) => {
                // Hide image on error to show fallback
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </motion.div>

        <motion.div className="space-y-8">
          <motion.h2
            className="font-display text-5xl lg:text-6xl text-fire-orange uppercase tracking-wider mb-8"
            variants={itemVariants}
          >
            {BIO.headline}
          </motion.h2>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={itemVariants}
          >
            {BIO.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card-cinematic hover:shadow-fire-glow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-display text-fire-gradient bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-heading text-ash-grey uppercase tracking-wide mt-2">
                  {stat.label}
                  {stat.label === "YouTube Warriors" && (
                    <span className="text-fire-orange text-xs block mt-1 animate-pulse">LIVE</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            {BIO.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-400">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.blockquote
            className="border-l-4 border-fire-orange pl-8 py-4 font-quote italic text-2xl text-ash-grey relative"
            variants={itemVariants}
          >
            <span className="absolute -left-4 -top-2 text-6xl text-fire-orange/30">"</span>
            {BIO.pullQuote}
            <span className="absolute -right-4 -bottom-2 text-6xl text-fire-orange/30">"</span>
          </motion.blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
