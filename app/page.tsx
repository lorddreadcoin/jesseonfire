import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoHighlights from '@/components/VideoHighlights'
import VideoCarousel from '@/components/VideoCarousel'
import Sponsors from '@/components/Sponsors'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { VideoData } from '@/components/VideoCarousel'

// Mock data - replace with real YouTube data
const mockVideos: VideoData[] = [
  {
    id: 1,
    title: "Celebrity DESTROYED with FACTS and FIRE - Brutal Roast Compilation",
    thumbnail: "/placeholder.jpg",
    views: "1.2M views",
    duration: "15:34",
    uploadDate: "2 days ago",
    url: "https://youtube.com/watch?v=example1",
    category: "ROAST"
  },
  {
    id: 2,
    title: "UFC 300 Conspiracy: What Dana White Doesn't Want You to Know",
    thumbnail: "/placeholder.jpg",
    views: "856K views",
    duration: "22:15",
    uploadDate: "5 days ago",
    url: "https://youtube.com/watch?v=example2",
    category: "MMA"
  },
  {
    id: 3,
    title: "Political Puppet Masters EXPOSED - Follow the Money Trail",
    thumbnail: "/placeholder.jpg",
    views: "2.3M views",
    duration: "18:42",
    uploadDate: "1 week ago",
    url: "https://youtube.com/watch?v=example3",
    category: "POLITICS"
  },
  {
    id: 4,
    title: "MMA Fighter Calls Me Out - My Response Will Shock You",
    thumbnail: "/placeholder.jpg",
    views: "445K views",
    duration: "12:08",
    uploadDate: "2 weeks ago",
    url: "https://youtube.com/watch?v=example4",
    category: "MMA"
  },
  {
    id: 5,
    title: "Deep State Alert: They're Watching Everything You Do",
    thumbnail: "/placeholder.jpg",
    views: "1.8M views",
    duration: "25:55",
    uploadDate: "3 weeks ago",
    url: "https://youtube.com/watch?v=example5",
    category: "CONSPIRACY"
  },
  {
    id: 6,
    title: "Hollywood Elite TRIGGERED by These Truth Bombs",
    thumbnail: "/placeholder.jpg",
    views: "923K views",
    duration: "19:21",
    uploadDate: "1 month ago",
    url: "https://youtube.com/watch?v=example6",
    category: "ROAST"
  }
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Section - Full Viewport */}
      <Hero />
      
      {/* Video Carousel Section - Latest Fire Content */}
      <VideoCarousel videos={mockVideos} />
      
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
