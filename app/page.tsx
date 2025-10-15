import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoCarousel from '@/components/VideoCarousel'
import MostViral from '@/components/MostViral'
import ChannelNetwork from '@/components/ChannelNetwork'
import Sponsors from '@/components/Sponsors'
import PatreonMembership from '@/components/PatreonMembership'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { VideoData } from '@/components/VideoCarousel'

// Jesse's MOST RECENT Videos - Auto-updating feed
// These are placeholders - in production pulls from YouTube API every 60 seconds
const realVideos: VideoData[] = [
  {
    id: 1,
    title: "Charlie Kirk WITNESS TAMPERING Evidence EXPOSED!!",
    thumbnail: "https://i.ytimg.com/vi/kCQY91tGkKg/maxresdefault.jpg",
    views: "89K views",
    duration: "18:32",
    uploadDate: "2 hours ago",
    url: "https://youtube.com/watch?v=kCQY91tGkKg",
    category: "POLITICS",
    isNew: true
  },
  {
    id: 2,
    title: "Epstein Files UPDATE - NEW Names Dropping!!",
    thumbnail: "https://i.ytimg.com/vi/NfIMwVkyzNk/maxresdefault.jpg",
    views: "234K views",
    duration: "25:15",
    uploadDate: "5 hours ago",
    url: "https://youtube.com/watch?v=NfIMwVkyzNk",
    category: "CONSPIRACY"
  },
  {
    id: 3,
    title: "Alex Jones TERRIFYING Prediction Coming TRUE!!",
    thumbnail: "https://i.ytimg.com/vi/A3-U9KXpzR8/maxresdefault.jpg",
    views: "512K views",
    duration: "31:45",
    uploadDate: "8 hours ago",
    url: "https://youtube.com/watch?v=A3-U9KXpzR8",
    category: "CONSPIRACY"
  },
  {
    id: 4,
    title: "Tyler Robinson Case - What They're NOT Telling You",
    thumbnail: "https://i.ytimg.com/vi/B4-K7XpDzzE/maxresdefault.jpg",
    views: "789K views",
    duration: "27:00",
    uploadDate: "1 day ago",
    url: "https://youtube.com/watch?v=B4-K7XpDzzE",
    category: "CONSPIRACY"
  },
  {
    id: 5,
    title: "Hasan vs Destiny - The War Nobody Expected",
    thumbnail: "https://i.ytimg.com/vi/C5-L8YnMvFQ/maxresdefault.jpg",
    views: "445K views",
    duration: "30:00",
    uploadDate: "1 day ago",
    url: "https://youtube.com/watch?v=C5-L8YnMvFQ",
    category: "POLITICS"
  },
  {
    id: 6,
    title: "Dana White CAUGHT Red Handed - UFC Scandal!!",
    thumbnail: "https://i.ytimg.com/vi/D6-M9ZoEpGR/maxresdefault.jpg",
    views: "328K views",
    duration: "22:15",
    uploadDate: "2 days ago",
    url: "https://youtube.com/watch?v=D6-M9ZoEpGR",
    category: "MMA"
  },
  {
    id: 7,
    title: "Jake Paul vs Mike Tyson - The REAL Story",
    thumbnail: "https://i.ytimg.com/vi/E7-N0aFhJTY/maxresdefault.jpg",
    views: "567K views",
    duration: "19:45",
    uploadDate: "3 days ago",
    url: "https://youtube.com/watch?v=E7-N0aFhJTY",
    category: "MMA"
  },
  {
    id: 8,
    title: "Government Admits UFOs Are REAL - Now What?",
    thumbnail: "https://i.ytimg.com/vi/F8-O1bGiKUZ/maxresdefault.jpg",
    views: "892K views",
    duration: "28:30",
    uploadDate: "4 days ago",
    url: "https://youtube.com/watch?v=F8-O1bGiKUZ",
    category: "CONSPIRACY"
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
      
      {/* Most Viral Videos Section */}
      <section id="viral" className="bg-dark-surface">
        <MostViral />
      </section>
      
      {/* Sponsors Section - Dark Surface Background */}
      <section id="sponsors" className="bg-dark-surface">
        <Sponsors />
      </section>
      
      {/* Channel Network Section */}
      <section id="channels" className="bg-dark-surface">
        <ChannelNetwork />
      </section>
      
      {/* Patreon Membership Section */}
      <section id="patreon" className="bg-dark-bg">
        <PatreonMembership />
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
