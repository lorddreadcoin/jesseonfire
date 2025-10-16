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
              className="ot-council-title text-fire-orange mb-4"
              variants={itemVariants}
            >
              {BIO.headline}
            </motion.h2>
            <motion.p 
              className="ot-council-text text-ash-grey"
              variants={itemVariants}
            >
              Undefeated on the Mic
            </motion.p>
          </div>

          {/* Jesse's Signature Banner */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
              <Image
                src="https://i.imgur.com/nGfrx8Y.png"
                alt="Jesse ON FIRE Signature"
                width={800}
                height={200}
                className="w-full h-auto"
                unoptimized
                priority
              />
            </div>
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
            className="ot-council-heading text-fire-orange italic mb-8"
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
