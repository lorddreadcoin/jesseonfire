"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
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
        {/* Portrait/Image - REAL JESSE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-fire-glow-lg">
            {/* Jesse's actual image */}
            <div className="aspect-[4/5] relative">
              <Image
                src="https://i.imgur.com/H6z4r3t.png"
                alt="Jesse ON FIRE - The GOAT on the Mic"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            {/* Fire gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Badge overlay */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-fire-orange/50">
              <div className="flex items-center gap-2">
                <FaYoutube className="text-red-600 text-xl" />
                <span className="text-white font-bold">517K+ Warriors</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-8">
          <div className="text-center lg:text-left mb-6">
            <motion.h2
              className="font-display text-5xl lg:text-6xl text-fire-orange uppercase tracking-wider mb-2"
              variants={itemVariants}
            >
              {BIO.headline}
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-400 font-bold"
              variants={itemVariants}
            >
              Undefeated on the Mic
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-3 gap-6 mb-12"
            variants={itemVariants}
          >
            {BIO.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card-cinematic hover:shadow-fire-glow-lg transition-all duration-300 hover:scale-105 text-center p-6"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-display text-fire-gradient bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-heading text-ash-grey uppercase tracking-wide">
                  {stat.label}
                  {stat.label === "Warriors" && (
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
