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

        <motion.div className="space-y-6">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white"
            variants={itemVariants}
          >
            {BIO.headline}
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            {BIO.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg px-6 py-4"
              >
                <div className="text-2xl font-bold text-orange-500">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
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
            className="border-l-4 border-orange-500 pl-6 italic text-xl text-gray-300"
            variants={itemVariants}
          >
            "{BIO.pullQuote}"
          </motion.blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
