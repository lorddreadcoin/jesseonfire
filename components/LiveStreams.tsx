"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay, FaEye, FaUsers } from "react-icons/fa";
import { useState } from "react";

export interface LiveStream {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  viewers: string;
  url: string;
  timeAgo: string;
  vph?: string;
}

// Jesse's MOST VIRAL Live Streams - MILLIONS OF VIEWS
const liveStreams: LiveStream[] = [
  {
    id: 1,
    title: "Trump SNIPER Makes SHOCKING Claim! WITNESS PROTECTION IMMEDIATELY!",
    thumbnail: "https://i.ytimg.com/vi/f-17aycj6vM/maxresdefault.jpg",
    views: "2.9M views",
    viewers: "50k",
    url: "https://www.youtube.com/live/f-17aycj6vM",
    timeAgo: "Streamed 1 year ago",
    vph: "1 VPH"
  },
  {
    id: 2,
    title: "IRAN Behind Trump Assassination PLOT!!?? Secret Service KNEW IT WAS COMING!!!",
    thumbnail: "https://i.ytimg.com/vi/sJiLjQ9f0w4/maxresdefault.jpg",
    views: "369K views",
    viewers: "8.7k",
    url: "https://www.youtube.com/live/sJiLjQ9f0w4",
    timeAgo: "Streamed 1 year ago"
  },
  {
    id: 3,
    title: "Donald Trump's REVENGE & the SHOOTER was with BLACKROCK!!! WHAT??????????",
    thumbnail: "https://i.ytimg.com/vi/CQYNGiK5ZAQ/maxresdefault.jpg",
    views: "349K views",
    viewers: "3.7k",
    url: "https://www.youtube.com/live/CQYNGiK5ZAQ",
    timeAgo: "Streamed 1 year ago",
    vph: "1 VPH"
  },
  {
    id: 4,
    title: "Joe Biden DROPS OUT! Their Plan is in PLAIN SIGHT! Donald Trump Needs TRIPLE SECURITY!",
    thumbnail: "https://i.ytimg.com/vi/IkOW6mcNJmM/maxresdefault.jpg",
    views: "158K views",
    viewers: "7.3k",
    url: "https://www.youtube.com/live/IkOW6mcNJmM",
    timeAgo: "Streamed 1 year ago"
  },
  {
    id: 5,
    title: "HULK HOGAN DEAD!! SHOCKING TRAGIC DETAILS HAVE ME TERRIFIED!!",
    thumbnail: "https://i.ytimg.com/vi/IpGdtysiyU0/maxresdefault.jpg",
    views: "149K views",
    viewers: "1 VPH",
    url: "https://www.youtube.com/live/IpGdtysiyU0",
    timeAgo: "Streamed 2 months ago"
  }
];

const LiveStreams = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleStreamClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-obsidian to-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl lg:text-6xl text-fire-orange mb-4 uppercase tracking-wider">
            🔴 MOST VIRAL LIVE STREAMS 🔴
          </h2>
          <p className="text-xl text-ash-grey font-heading uppercase">
            The Explosive Streams That Got MILLIONS of Views
          </p>
        </motion.div>

        {/* Live Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream, index) => (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setHoveredId(stream.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleStreamClick(stream.url)}
              className="cursor-pointer group"
            >
              <div className="bg-charcoal rounded-xl overflow-hidden shadow-xl hover:shadow-fire-glow-lg transition-all duration-300 border border-fire-orange/20">
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={stream.thumbnail}
                    alt={stream.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                  
                  {/* Live Badge */}
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    STREAMED
                  </div>
                  
                  {/* Play Overlay */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity ${hoveredId === stream.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-fire-orange/90 rounded-full p-4">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration/Time */}
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                    {stream.timeAgo}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-heading text-white text-lg mb-2 line-clamp-2 group-hover:text-fire-orange transition-colors">
                    {stream.title}
                  </h3>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-ash-grey">
                    <div className="flex items-center gap-1">
                      <FaEye className="text-fire-orange" />
                      <span>{stream.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-fire-orange" />
                      <span>{stream.viewers}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStreams;
