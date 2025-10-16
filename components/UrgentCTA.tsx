"use client";

import { motion } from "framer-motion";
import { FaFire, FaClock } from "react-icons/fa";
import { LINKS } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function UrgentCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target to midnight
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - now.getTime();
      
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-16 mx-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900 via-fire-orange to-red-900 p-1">
          <div className="bg-obsidian rounded-xl p-8 md:p-12">
            {/* Animated fire particles background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-fire-orange rounded-full"
                  animate={{
                    y: [-20, -100],
                    x: [0, (Math.random() - 0.5) * 50],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: 0,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              {/* Urgent Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6 font-bold text-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaClock className="w-4 h-4" />
                </motion.div>
                <span>TODAY'S CONTENT EXPIRES IN</span>
              </motion.div>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 mb-8">
                {[
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <motion.div
                      className="bg-fire-gradient text-white ot-council-heading rounded-xl px-4 md:px-6 py-3 md:py-4 min-w-[80px] md:min-w-[100px] shadow-fire-glow"
                      key={item.value}
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.div>
                    <span className="text-ash-grey text-xs mt-2 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Main Message */}
              <h3 className="ot-council-title mb-4">
                Don't Miss Today's Truth Bomb
              </h3>
              
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Jesse drops exclusive content daily. Subscribe now to catch today's upload before the algorithms hide it.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`${LINKS.youtube}?sub_confirmation=1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-fire-gradient text-white px-8 py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-fire-glow-lg hover:shadow-fire-glow transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFire className="w-6 h-6" />
                  <span>SUBSCRIBE NOW</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href={LINKS.patreon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-fire-orange text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-fire-orange/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔥 JOIN PATREON
                </motion.a>
              </div>

              <p className="text-ash-grey/60 text-sm mt-6">
                517,234 warriors already subscribed • Join the movement
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
