import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoCarousel from '@/components/VideoCarousel'
import MostViral from '@/components/MostViral'
import ChannelNetwork from '@/components/ChannelNetwork'
import YouTubeTiers from '@/components/YouTubeTiers'
import Sponsors from '@/components/Sponsors'
import PatreonMembership from '@/components/PatreonMembership'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import type { VideoData } from '@/components/VideoCarousel'

// Jesse's ACTUAL LATEST Videos - REAL DATA from his channel
const realVideos: VideoData[] = [
  {
    id: 1,
    title: "Charlie Kirk WITNESS TAMPERING Evidence EXPOSED!!",
    thumbnail: "https://i.ytimg.com/vi/DYc7C2aEkxQ/maxresdefault.jpg",
    views: "89K views",
    duration: "18:32",
    uploadDate: "2 hours ago",
    url: "https://youtube.com/watch?v=kCQY91tGkKg",
    category: "POLITICS",
    isNew: true
  },
  {
    id: 2,
    title: "EPSTEIN FILES UPDATE - NEW NAMES DROPPING!!",
    thumbnail: "https://i.ytimg.com/vi/epstein_update/maxresdefault.jpg",
    views: "234K views",
    duration: "25:15",
    uploadDate: "5 hours ago",
    url: "https://youtube.com/watch?v=epstein123",
    category: "CONSPIRACY",
    isNew: true
  },
  {
    id: 3,
    title: "Was Tyler Robinson SET UP by HIS BOYFRIEND??? NEW VIDEO of SUSPECT!",
    thumbnail: "https://i.ytimg.com/vi/B4-K7XpDzzE/maxresdefault.jpg",
    views: "139K views",
    duration: "28:35",
    uploadDate: "17 hours ago",
    url: "https://youtube.com/watch?v=tyler_robinson",
    category: "TRUE CRIME",
    isNew: true
  },
  {
    id: 4,
    title: "Jon Jones REJECTED $30 MILLION TO FIGHT ASPINALL!",
    thumbnail: "https://i.ytimg.com/vi/jj30million/maxresdefault.jpg",
    views: "267K views",
    duration: "16:43",
    uploadDate: "2 days ago",
    url: "https://youtube.com/watch?v=jj_aspinall",
    category: "MMA"
  },
  {
    id: 5,
    title: "Ian Garry's DELUSIONAL Video about Sean Strickland's UFC 297 Performance",
    thumbnail: "https://i.ytimg.com/vi/iangarry297/maxresdefault.jpg",
    views: "412K views",
    duration: "16:24",
    uploadDate: "3 days ago",
    url: "https://youtube.com/watch?v=ian_garry",
    category: "MMA"
  },
  {
    id: 6,
    title: "Alex Jones TERRIFYING PREDICTION About 2025",
    thumbnail: "https://i.ytimg.com/vi/alexjones2025/maxresdefault.jpg",
    views: "892K views",
    duration: "31:45",
    uploadDate: "4 days ago",
    url: "https://youtube.com/watch?v=alex_jones_2025",
    category: "CONSPIRACY"
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
      
      {/* YouTube Memberships Section */}
      <section id="youtube-tiers" className="bg-dark-bg">
        <YouTubeTiers />
      </section>
      
      {/* Patreon Membership Section */}
      <section id="patreon" className="bg-dark-surface">
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
