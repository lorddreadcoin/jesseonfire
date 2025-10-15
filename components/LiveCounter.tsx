'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LiveCounter() {
  const [currentCount, setCurrentCount] = useState(517000);
  const [dailyGrowth] = useState(Math.floor(Math.random() * 1000) + 500);
  
  // Simulate real-time growth
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000); // Add a few subscribers every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const formatCount = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${Math.floor(num / 1000)}K`;
    return num.toString();
  };
  
  const progressPercent = (currentCount / 1000000) * 100;
  
  return (
    <motion.div
      className="absolute top-8 left-8 bg-black/80 backdrop-blur-md border border-fire-orange/30 rounded-lg p-4 z-20"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        <div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">
            YouTube Warriors
          </div>
          <div className="text-2xl font-black text-fire-orange">
            {formatCount(currentCount)}+ <span className="text-xs text-green-400">+{dailyGrowth} TODAY</span>
          </div>
        </div>
      </div>
      
      <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-fire-orange to-red-600"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1">Road to 1M Warriors • {(1000000 - currentCount).toLocaleString()} to go</div>
    </motion.div>
  )
}
