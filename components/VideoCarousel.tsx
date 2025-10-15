"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPlay, FaEye, FaYoutube } from "react-icons/fa";

export interface VideoData {
  id: string | number;
  title: string;
  thumbnail: string;
  views?: string;
  duration?: string;
  uploadDate?: string;
  url: string;
  category?: string;
  isNew?: boolean;
}

interface VideoCarouselProps {
  videos: VideoData[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleVideoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl lg:text-6xl text-fire-orange mb-4 uppercase tracking-wider">
            Latest Fire Content
          </h2>
          <p className="text-xl text-ash-grey font-heading uppercase">
            Fresh Uploads • Unfiltered Truth
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
            aria-label="Previous video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
            aria-label="Next video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(currentIndex, currentIndex + 3).map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => handleVideoClick(video.url)}
              >
                <div className="card-cinematic overflow-hidden hover:shadow-fire-glow-lg transition-all hover:scale-105">
                  {/* Thumbnail */}
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized // For external YouTube images
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-fire-gradient rounded-full p-4 shadow-fire-glow"
                      >
                        <FaPlay className="w-8 h-8 text-white ml-1" />
                      </motion.div>
                    </div>

                    {/* Badges */}
                    {video.isNew && (
                      <div className="absolute top-2 left-2 bg-fire-gradient px-3 py-1 rounded-full animate-pulse shadow-fire-glow">
                        <span className="text-xs font-bold text-white uppercase">NEW</span>
                      </div>
                    )}
                    
                    {video.category && (
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
                        <span className="text-xs text-fire-orange font-bold">{video.category}</span>
                      </div>
                    )}
                    
                    {video.duration && (
                      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
                        <span className="text-xs text-white">{video.duration}</span>
                      </div>
                    )}
                    
                    {/* YouTube Icon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoClick(video.url);
                      }}
                      className="absolute bottom-2 left-2 bg-red-600/80 hover:bg-red-600 p-2 rounded-full transition-colors"
                    >
                      <FaYoutube className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-heading text-lg text-white uppercase line-clamp-2 group-hover:text-fire-orange transition-colors">
                      {video.title}
                    </h3>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-2 text-sm text-ash-grey">
                      {video.views && (
                        <span className="flex items-center gap-1">
                          <FaEye className="w-3 h-3" />
                          {video.views}
                        </span>
                      )}
                      {video.uploadDate && (
                        <span>{video.uploadDate}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(videos.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / 3) === index
                    ? 'w-8 bg-fire-orange'
                    : 'bg-ash-grey hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
