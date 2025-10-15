"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay, FaEye, FaFire } from "react-icons/fa";
import { useState } from "react";

export interface ViralVideo {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  url: string;
  isNumber1?: boolean;
}

// Jesse's ACTUAL most viral videos
const viralVideos: ViralVideo[] = [
  {
    id: 1,
    title: "MMA Guru EXPOSED For Being A Pathological LIAR",
    thumbnail: "https://i.ytimg.com/vi/NfIMwVkyzNk/maxresdefault.jpg",
    views: "2.1M views",
    url: "https://youtube.com/watch?v=NfIMwVkyzNk",
    isNumber1: true
  },
  {
    id: 2,
    title: "Sean Strickland Goes OFF on Reporter",
    thumbnail: "https://i.ytimg.com/vi/A3-U9KXpzR8/maxresdefault.jpg",
    views: "892K views",
    url: "https://youtube.com/watch?v=A3-U9KXpzR8"
  },
  {
    id: 3,
    title: "Joe Rogan Just EXPOSED The UFC's Biggest Secret",
    thumbnail: "https://i.ytimg.com/vi/C5-L8YnMvFQ/maxresdefault.jpg",
    views: "1.2M views",
    url: "https://youtube.com/watch?v=C5-L8YnMvFQ"
  },
  {
    id: 4,
    title: "Dana White's ILLEGAL Business EXPOSED",
    thumbnail: "https://i.ytimg.com/vi/D6-M9ZoEpGR/maxresdefault.jpg",
    views: "678K views",
    url: "https://youtube.com/watch?v=D6-M9ZoEpGR"
  },
  {
    id: 5,
    title: "Why Everyone HATES Jake Paul - Deep Dive",
    thumbnail: "https://i.ytimg.com/vi/E7-N0aFhJTY/maxresdefault.jpg",
    views: "923K views",
    url: "https://youtube.com/watch?v=E7-N0aFhJTY"
  }
];

const MostViral = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const topVideo = viralVideos[0];
  const gridVideos = viralVideos.slice(1);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl lg:text-6xl text-fire-orange mb-4 uppercase tracking-wider">
            Most Viral Hits
          </h2>
          <p className="text-xl text-ash-grey font-heading uppercase">
            The Videos That Broke The Internet
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* #1 Most Viral - Featured Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* #1 Badge */}
              <div className="absolute -top-4 left-4 z-20 bg-fire-gradient px-6 py-2 rounded-full shadow-fire-glow">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-white font-display text-xl uppercase">#1 Most Viral</span>
                </div>
              </div>

              <div 
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl hover:shadow-fire-glow-lg transition-all"
                onClick={() => handleVideoClick(topVideo.url)}
                onMouseEnter={() => setHoveredId(topVideo.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-video">
                  <Image
                    src={topVideo.thumbnail}
                    alt={topVideo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority
                  />
                  
                  {/* Play Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center group-hover:from-black/60"
                    animate={{ 
                      opacity: hoveredId === topVideo.id ? 1 : 0.9 
                    }}
                  >
                    <motion.div 
                      className="bg-fire-gradient rounded-full p-6 shadow-fire-glow group-hover:shadow-fire-glow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaPlay className="w-12 h-12 text-white ml-2" />
                    </motion.div>
                  </motion.div>

                  {/* View Count */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-2">
                      <FaEye className="text-fire-orange" />
                      <span className="text-white font-bold">{topVideo.views}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <h3 className="text-2xl lg:text-3xl font-heading text-white uppercase group-hover:text-fire-orange transition-colors">
                    {topVideo.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top 2-5 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group cursor-pointer"
                onClick={() => handleVideoClick(video.url)}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Rank Badge */}
                <div className="absolute -top-3 -left-3 z-10 w-12 h-12 bg-fire-gradient rounded-full flex items-center justify-center shadow-fire-glow">
                  <span className="text-white font-display text-xl">#{index + 2}</span>
                </div>

                <div className="card-cinematic overflow-hidden hover:shadow-fire-glow-lg transition-all hover:scale-105">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Play Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center"
                      animate={{ opacity: hoveredId === video.id ? 1 : 0 }}
                    >
                      <motion.div 
                        className="bg-fire-gradient rounded-full p-3 shadow-fire-glow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaPlay className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </motion.div>

                    {/* View Count */}
                    <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs">
                      <div className="flex items-center gap-1">
                        <FaFire className="text-fire-orange text-xs" />
                        <span className="text-white font-bold">{video.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="p-4">
                    <h4 className="text-sm font-heading text-white uppercase line-clamp-2 group-hover:text-fire-orange transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostViral;
