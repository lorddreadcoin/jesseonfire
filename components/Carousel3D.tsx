'use client'
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FaPlay, FaFire, FaClock, FaEye } from 'react-icons/fa'
import VideoPlayer from './VideoPlayer'

export interface Video3DData {
  id: string
  title: string
  thumbnail: string
  views: string
  duration: string
  uploadDate: string
  videoId: string
  category?: string
  isLive?: boolean
}

interface Carousel3DProps {
  videos: Video3DData[]
  title: string
  subtitle?: string
}

export default function Carousel3D({ videos, title, subtitle }: Carousel3DProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video3DData | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const rotateY = useTransform(scrollYProgress, [0, 1], [45, -45])

  const handleVideoClick = (video: Video3DData) => {
    setSelectedVideo(video)
  }

  const extractVideoId = (url: string): string => {
    // Extract video ID from YouTube URL
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
    return match ? match[1] : url
  }

  return (
    <>
      <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-obsidian to-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl lg:text-6xl text-fire-orange mb-4 uppercase tracking-wider">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-ash-grey font-heading uppercase">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* 3D Carousel Container */}
          <motion.div 
            className="relative perspective-1000"
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{ rotateY }}
            >
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, z: -100 }}
                  whileInView={{ 
                    opacity: 1, 
                    z: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    z: 50,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onMouseEnter={() => setHoveredId(video.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleVideoClick(video)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-fire-orange/30 hover:border-fire-orange shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_40px_rgba(255,69,0,0.8)] transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      
                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity ${hoveredId === video.id ? 'opacity-100' : 'opacity-0'}`}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: hoveredId === video.id ? 1 : 0 }}
                          className="bg-fire-orange rounded-full p-4 shadow-2xl"
                        >
                          <FaPlay className="text-white text-2xl ml-1" />
                        </motion.div>
                      </div>
                      
                      {/* Duration/Live Badge */}
                      <div className="absolute top-2 right-2">
                        {video.isLive ? (
                          <div className="bg-red-600 px-3 py-1 rounded-full flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <span className="text-white font-bold text-xs">LIVE</span>
                          </div>
                        ) : (
                          <div className="bg-black/90 px-2 py-1 rounded text-white font-bold text-xs">
                            {video.duration}
                          </div>
                        )}
                      </div>

                      {/* Category */}
                      {video.category && (
                        <div className="absolute top-2 left-2 bg-fire-gradient px-3 py-1 rounded-full">
                          <span className="text-white font-bold text-xs">{video.category}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-white font-heading text-lg mb-2 line-clamp-2 group-hover:text-fire-orange transition-colors">
                        {video.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm text-ash-grey">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <FaEye className="text-fire-orange" />
                            {video.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="text-fire-orange" />
                            {video.uploadDate}
                          </span>
                        </div>
                        <FaFire className="text-fire-orange text-lg" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          videoId={extractVideoId(selectedVideo.videoId)}
          title={selectedVideo.title}
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  )
}
