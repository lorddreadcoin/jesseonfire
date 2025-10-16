'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaYoutube, FaExpand } from 'react-icons/fa'

interface VideoPlayerProps {
  videoId: string
  title: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoPlayer({ videoId, title, isOpen, onClose }: VideoPlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleYouTubeClick = () => {
    window.open(`https://youtube.com/watch?v=${videoId}`, '_blank')
  }

  const toggleFullscreen = () => {
    const iframe = document.getElementById('video-iframe') as HTMLIFrameElement
    if (!isFullscreen) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />
          
          {/* Player Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-[9999] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-7xl max-h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-fire-orange/50">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black via-black/80 to-transparent p-4 z-10">
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-heading text-lg md:text-xl line-clamp-2 pr-4">
                    {title}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={handleYouTubeClick}
                      className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                      title="Watch on YouTube"
                    >
                      <FaYoutube className="text-white text-xl" />
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 bg-fire-orange/80 hover:bg-fire-orange rounded-lg transition-colors"
                      title="Fullscreen"
                    >
                      <FaExpand className="text-white text-xl" />
                    </button>
                    <button
                      onClick={onClose}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                      title="Close"
                    >
                      <FaTimes className="text-white text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* YouTube Embed */}
              <iframe
                id="video-iframe"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
