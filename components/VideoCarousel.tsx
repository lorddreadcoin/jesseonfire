"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaEye, FaYoutube, FaTimes, FaExpand } from 'react-icons/fa';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface VideoData {
  id: string | number;
  youtubeId?: string;
  title: string;
  thumbnail: string;
  views: string;
  duration?: string;
  uploadDate?: string;
  url?: string;
  category?: 'MMA' | 'POLITICS' | 'CONSPIRACY' | 'ROAST';
}

interface VideoCarouselProps {
  videos: VideoData[];
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | number | null>(null);
  const [expandedVideoId, setExpandedVideoId] = useState<string | number | null>(null);
  
  const extractYoutubeId = (url?: string): string => {
    if (!url) return '';
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };
  
  const handlePlayClick = (videoId: string | number) => {
    setPlayingVideoId(videoId);
  };
  
  const handleExpandClick = (videoId: string | number) => {
    setExpandedVideoId(videoId);
  };
  
  const handleCloseExpanded = () => {
    setExpandedVideoId(null);
  };
  
  const handleOpenInYouTube = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Fire gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Latest Fire
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Hot takes, brutal truths, and conspiracy deep dives
          </p>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-gray-600',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-orange-500',
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="py-12"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="max-w-[400px]">
              <div className="cursor-pointer group">
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                  {playingVideoId === video.id ? (
                    /* YouTube Player Embed */
                    <div className="relative w-full h-full bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${extractYoutubeId(video.url)}?autoplay=1&modestbranding=1&rel=0`}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      
                      {/* Controls Overlay */}
                      <div className="absolute top-2 right-2 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExpandClick(video.id);
                          }}
                          className="bg-black/70 backdrop-blur-sm p-2 rounded-full hover:bg-black/90 transition-colors"
                        >
                          <FaExpand className="w-4 h-4 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenInYouTube(video.url);
                          }}
                          className="bg-red-600/70 backdrop-blur-sm p-2 rounded-full hover:bg-red-600 transition-colors"
                        >
                          <FaYoutube className="w-4 h-4 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideoId(null);
                          }}
                          className="bg-black/70 backdrop-blur-sm p-2 rounded-full hover:bg-black/90 transition-colors"
                        >
                          <FaTimes className="w-4 h-4 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    /* Thumbnail View */
                    <motion.div 
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handlePlayClick(video.id)}
                    >
                      {video.thumbnail ? (
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                      )}
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Play button with text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <motion.div
                          className="bg-red-600/90 rounded-full p-4 group-hover:bg-red-600 transition-colors shadow-2xl"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaPlay className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                        <div className="text-white text-xs font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                          Play Here
                        </div>
                      </div>
                      
                      {/* Quick YouTube Link */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenInYouTube(video.url);
                        }}
                        className="absolute top-2 right-2 bg-red-600/70 backdrop-blur-sm p-2 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <FaYoutube className="w-4 h-4 text-white" />
                      </motion.button>
                      {/* Category badge */}
                      {video.category && (
                        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-bold text-orange-500">
                            {video.category}
                          </span>
                        </div>
                      )}

                      {/* Duration */}
                      {video.duration && (
                        <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
                          <span className="text-xs text-white font-medium">
                            {video.duration}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Video info */}
                <div className="mt-4 px-2">
                  <h3 className="text-white font-bold text-lg line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation styling */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #FF4500 !important;
            background: rgba(0, 0, 0, 0.5);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            backdrop-filter: blur(10px);
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px !important;
          }
          
          .swiper-pagination {
            bottom: 0 !important;
          }
          
          .swiper-pagination-bullet {
            background: #4B5563;
            opacity: 1;
          }
          
          .swiper-pagination-bullet-active {
            background: #FF4500 !important;
          }
        `}</style>
      </div>
      
      {/* Expanded Video Modal */}
      <AnimatePresence>
        {expandedVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={handleCloseExpanded}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {videos.find(v => v.id === expandedVideoId) && (
                <iframe
                  src={`https://www.youtube.com/embed/${extractYoutubeId(videos.find(v => v.id === expandedVideoId)?.url)}?autoplay=1&modestbranding=1&rel=0`}
                  title={videos.find(v => v.id === expandedVideoId)?.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCloseExpanded}
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm p-3 rounded-full hover:bg-red-600 transition-colors z-10"
              >
                <FaTimes className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoCarousel;
