import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoHighlights from '@/components/VideoHighlights'
import VideoCarousel from '@/components/VideoCarousel'
import Sponsors from '@/components/Sponsors'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import PatreonMembership from '@/components/PatreonMembership'
import { VideoData } from '@/components/VideoCarousel'

// Jesse's MOST RECENT Viral Videos - Charlie Kirk & Epstein Content
// This should be dynamically fetched from YouTube API in production
const realVideos: VideoData[] = [
  // Most Recent Upload (This slot updates with each new video)
  {
    id: 1,
    title: "BOMBSHELL: Charlie Kirk WITNESS TAMPERING Evidence EXPOSED!!",
    thumbnail: "https://i.ytimg.com/vi/latest1/maxresdefault.jpg",
    views: "89K views",
    duration: "18:32",
    uploadDate: "2 hours ago",
    url: "https://youtube.com/watch?v=latest1",
    category: "POLITICS",
    isNew: true
  },
  {
    id: 2,
    title: "Charlie Kirk ASSASSINATION Plot: NEW SUSPECTS & SHOCKING VIDEO!!",
    thumbnail: "https://i.ytimg.com/vi/kirk2/maxresdefault.jpg",
    views: "234K views",
    duration: "25:15",
    uploadDate: "5 hours ago",
    url: "https://youtube.com/watch?v=kirk2",
    category: "CONSPIRACY"
  },
  {
    id: 3,
    title: "EPSTEIN FILES: Elite Names LEAKED - They're SCRAMBLING!!",
    thumbnail: "https://i.ytimg.com/vi/epstein1/maxresdefault.jpg",
    views: "512K views",
    duration: "31:45",
    uploadDate: "8 hours ago",
    url: "https://youtube.com/watch?v=epstein1",
    category: "CONSPIRACY"
  },
  {
    id: 4,
    title: "Alex Jones TERRIFYING UPDATE on Epstein - ELITES PANIC!!",
    thumbnail: "https://i.ytimg.com/vi/jones1/maxresdefault.jpg",
    views: "789K views",
    duration: "27:00",
    uploadDate: "1 day ago",
    url: "https://youtube.com/watch?v=jones1",
    category: "CONSPIRACY"
  },
  {
    id: 5,
    title: "Charlie Kirk Case BREAKS WIDE OPEN - FBI Whistleblower!!",
    thumbnail: "https://i.ytimg.com/vi/kirk3/maxresdefault.jpg",
    views: "445K views",
    duration: "30:00",
    uploadDate: "1 day ago",
    url: "https://youtube.com/watch?v=kirk3",
    category: "POLITICS"
  },
  {
    id: 6,
    title: "Tyler Robinson SET UP by BOYFRIEND?? NEW EVIDENCE!!",
    thumbnail: "https://i.ytimg.com/vi/robinson1/maxresdefault.jpg",
    views: "328K views",
    duration: "22:15",
    uploadDate: "2 days ago",
    url: "https://youtube.com/watch?v=robinson1",
    category: "CONSPIRACY"
  },
  {
    id: 7,
    title: "Hasan Piker ANIMAL ABUSE Scandal - Destiny WAGES WAR!!",
    thumbnail: "https://i.ytimg.com/vi/hasan1/maxresdefault.jpg",
    views: "567K views",
    duration: "19:45",
    uploadDate: "3 days ago",
    url: "https://youtube.com/watch?v=hasan1",
    category: "ROAST"
  },
  {
    id: 8,
    title: "MMA CONSPIRACY: Dana White's Secret Deal EXPOSED!!",
    thumbnail: "https://i.ytimg.com/vi/mma1/maxresdefault.jpg",
    views: "892K views",
    duration: "28:30",
    uploadDate: "4 days ago",
    url: "https://youtube.com/watch?v=mma1",
    category: "MMA"
  },
  {
    id: 9,
    title: "The WORLD Will BURN After THIS!! Watch IMMEDIATELY!!",
    thumbnail: "https://i.ytimg.com/vi/burn1/maxresdefault.jpg",
    views: "1.2M views",
    duration: "35:20",
    uploadDate: "5 days ago",
    url: "https://youtube.com/watch?v=burn1",
    category: "CONSPIRACY"
  },
  {
    id: 10,
    title: "OFF THE RAILS: Diddy Trial Update - NO SURVIVORS!!",
    thumbnail: "https://i.ytimg.com/vi/diddy1/maxresdefault.jpg",
    views: "678K views",
    duration: "32:15",
    uploadDate: "1 week ago",
    url: "https://youtube.com/watch?v=diddy1",
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

      {/* Patreon Membership Section */}
      <PatreonMembership />

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
