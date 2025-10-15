"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BeltLevel {
  name: string;
  color: string;
  gradient: string;
  minSubs: number;
  maxSubs: number;
  icon: string;
}

const BELT_LEVELS: BeltLevel[] = [
  { 
    name: "White Belt", 
    color: "white", 
    gradient: "from-gray-200 to-white",
    minSubs: 0, 
    maxSubs: 100000,
    icon: "⬜" 
  },
  { 
    name: "Blue Belt", 
    color: "blue", 
    gradient: "from-blue-600 to-blue-400",
    minSubs: 100000, 
    maxSubs: 250000,
    icon: "🟦" 
  },
  { 
    name: "Purple Belt", 
    color: "purple", 
    gradient: "from-purple-600 to-purple-400",
    minSubs: 250000, 
    maxSubs: 500000,
    icon: "🟪" 
  },
  { 
    name: "Brown Belt", 
    color: "brown", 
    gradient: "from-amber-800 to-amber-600",
    minSubs: 500000, 
    maxSubs: 750000,
    icon: "🟫" 
  },
  { 
    name: "Black Belt", 
    color: "black", 
    gradient: "from-gray-900 to-gray-700",
    minSubs: 750000, 
    maxSubs: 900000,
    icon: "⬛" 
  },
  { 
    name: "Red & Black Belt", 
    color: "red-black", 
    gradient: "from-red-600 via-black to-red-600",
    minSubs: 900000, 
    maxSubs: 1000000,
    icon: "🔥" 
  }
];

const SubscriberBeltProgress = () => {
  const [currentSubs, setCurrentSubs] = useState(516022);
  const [targetSubs] = useState(1000000);
  const [displaySubs, setDisplaySubs] = useState(516022);

  // Find current belt level
  const currentBelt = BELT_LEVELS.find(belt => 
    currentSubs >= belt.minSubs && currentSubs < belt.maxSubs
  ) || BELT_LEVELS[0];

  const nextBelt = BELT_LEVELS[BELT_LEVELS.indexOf(currentBelt) + 1] || BELT_LEVELS[BELT_LEVELS.length - 1];
  
  // Calculate progress within current belt
  const beltProgress = ((currentSubs - currentBelt.minSubs) / (currentBelt.maxSubs - currentBelt.minSubs)) * 100;
  
  // Calculate overall progress to 1M
  const overallProgress = (currentSubs / targetSubs) * 100;

  useEffect(() => {
    // Animate subscriber count
    const interval = setInterval(() => {
      setCurrentSubs(prev => {
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, targetSubs);
      });
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [targetSubs]);

  useEffect(() => {
    // Smooth counter animation
    const timer = setTimeout(() => {
      if (displaySubs < currentSubs) {
        setDisplaySubs(prev => Math.min(prev + Math.floor((currentSubs - prev) / 10) + 1, currentSubs));
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [displaySubs, currentSubs]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="absolute top-8 left-8 z-20"
    >
      <div className="bg-black/80 backdrop-blur-md rounded-xl p-4 border border-orange-500/20 shadow-2xl">
        {/* Title */}
        <div className="text-center mb-3">
          <h3 className="text-xs font-bold text-orange-500 uppercase tracking-wider">
            Road to 1M Black Belt
          </h3>
        </div>

        {/* Current Belt Display */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-16 h-3 rounded-full bg-gradient-to-r ${currentBelt.gradient} shadow-lg`} />
          <div className="text-white">
            <div className="text-sm font-bold">{currentBelt.name}</div>
            <div className="text-xs text-gray-400">{currentBelt.icon} Level</div>
          </div>
        </div>

        {/* Subscriber Count */}
        <div className="text-center mb-3">
          <motion.div 
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"
            key={displaySubs}
          >
            {displaySubs.toLocaleString()}
          </motion.div>
          <div className="text-xs text-gray-400">Subscribers</div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          {/* Belt Progress */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Current Belt</span>
              <span>{Math.floor(beltProgress)}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${currentBelt.gradient}`}
                initial={{ width: 0 }}
                animate={{ width: `${beltProgress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Overall Progress */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>To 1M 🔥</span>
              <span>{Math.floor(overallProgress)}%</span>
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-red-600"
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Next Belt Goal */}
        <div className="mt-3 pt-3 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-400">
              Next: <span className="text-white font-bold">{nextBelt.name}</span>
            </div>
            <div className="text-xs font-bold text-orange-500">
              {(nextBelt.minSubs - currentSubs).toLocaleString()} to go
            </div>
          </div>
        </div>

        {/* Fire Animation for milestones */}
        {currentSubs > 500000 && (
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-2xl">🔥</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SubscriberBeltProgress;
