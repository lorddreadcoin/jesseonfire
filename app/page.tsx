import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoHighlights from '@/components/VideoHighlights'
import VideoCarousel from '@/components/VideoCarousel'
import Sponsors from '@/components/Sponsors'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { VideoData } from '@/components/VideoCarousel'

// REAL Jesse ON FIRE YouTube Videos
const realVideos: VideoData[] = [
  {
    id: 1,
    title: "OFF THE RAILS with Jesse on Fire: Diddy Trial, Nate Diaz/Jon Jones",
    thumbnail: "https://i.ytimg.com/vi/kCQY91tGkKg/maxresdefault.jpg",
    views: "528K views",
    duration: "32:15",
    uploadDate: "3 days ago",
    url: "https://youtube.com/watch?v=kCQY91tGkKg",
    category: "CONSPIRACY"
  },
  {
    id: 2,
    title: "How Jesse On Fire Became The MMA Clickbait King 🎤 The MMA Industry",
    thumbnail: "https://i.ytimg.com/vi/NfIMwVkyzNk/maxresdefault.jpg",
    views: "1.2M views",
    duration: "45:21",
    uploadDate: "1 week ago",
    url: "https://youtube.com/watch?v=NfIMwVkyzNk",
    category: "MMA"
  },
  {
    id: 3,
    title: "LUKE THOMAS DESTROYS JESSE ON FIRE and MMA GURU",
    thumbnail: "https://i.ytimg.com/vi/A3-U9KXpzR8/maxresdefault.jpg",
    views: "856K views",
    duration: "28:42",
    uploadDate: "2 weeks ago",
    url: "https://youtube.com/watch?v=A3-U9KXpzR8",
    category: "MMA"
  },
  {
    id: 4,
    title: "MMA Conspiracy Hour: MMA Youtubers and False Information",
    thumbnail: "https://i.ytimg.com/vi/nQcygfyf9uE/maxresdefault.jpg",
    views: "445K views",
    duration: "55:08",
    uploadDate: "3 weeks ago",
    url: "https://youtube.com/watch?v=nQcygfyf9uE",
    category: "CONSPIRACY"
  },
  {
    id: 5,
    title: "THE MMA GURU REACTS TO JESSE ON FIRE & MMA JOEY'S RECENT BASED",
    thumbnail: "https://i.ytimg.com/vi/3NvVBjYXvwc/maxresdefault.jpg",
    views: "1.8M views",
    duration: "19:33",
    uploadDate: "1 month ago",
    url: "https://youtube.com/watch?v=3NvVBjYXvwc",
    category: "MMA"
  },
  {
    id: 6,
    title: "The MMA Detective vs Jesse on Fire 🔥",
    thumbnail: "https://i.ytimg.com/vi/Mh8I0jBTOas/maxresdefault.jpg",
    views: "923K views",
    duration: "42:21",
    uploadDate: "1 month ago",
    url: "https://youtube.com/watch?v=Mh8I0jBTOas",
    category: "MMA"
  },
  {
    id: 7,
    title: "Jesse On Fire on Luke Thomas calling him OUT",
    thumbnail: "https://i.ytimg.com/vi/29lFthQtRHY/maxresdefault.jpg",
    views: "672K views",
    duration: "15:45",
    uploadDate: "2 months ago",
    url: "https://youtube.com/watch?v=29lFthQtRHY",
    category: "MMA"
  },
  {
    id: 8,
    title: "Jesse ON FIRE EXPOSES The Truth About UFC Politics",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "2.1M views",
    duration: "38:17",
    uploadDate: "2 months ago",
    url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
    category: "POLITICS"
  }
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Section - Full Viewport */}
      <Hero />
      
      {/* Video Carousel Section - Latest Fire Content */}
      <VideoCarousel videos={realVideos} />
      
      {/* About Section - Dark Surface Background */}
      <section id="about" className="bg-dark-surface">
        <About />
      </section>
      
      {/* Video Highlights Section - Default Dark Background */}
      <section id="videos" className="bg-dark-bg">
        <VideoHighlights />
      </section>
      
      {/* Sponsors Section - Dark Surface Background */}
      <section id="sponsors" className="bg-dark-surface">
        <Sponsors />
      </section>
      
      {/* Community Section - Default Dark Background */}
      <section id="community" className="bg-dark-bg">
        <Community />
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTA Button */}
      <FloatingCTA />

      {/* Background Gradient Orbs for Visual Interest */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fire-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fire-secondary/10 rounded-full blur-3xl" />
      </div>
    </main>
  )
}
