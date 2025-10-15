import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoCarousel from '@/components/VideoCarousel'
import MostViral from '@/components/MostViral'
import ChannelNetwork from '@/components/ChannelNetwork'
import Sponsors from '@/components/Sponsors'
import PatreonMembership from '@/components/PatreonMembership'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import type { VideoData } from '@/components/VideoCarousel'

// Jesse's ACTUAL LATEST Videos - REAL DATA from his channel
const realVideos: VideoData[] = [
  {
    id: 1,
    title: "Was Tyler Robinson SET UP by HIS BOYFRIEND??? NEW VIDEO of SUSPECT!",
    thumbnail: "https://i.ytimg.com/vi/i6h2VE7l4eE/maxresdefault.jpg",
    views: "152K views",
    duration: "28:35",
    uploadDate: "Today",
    url: "https://www.youtube.com/watch?v=i6h2VE7l4eE",
    category: "TRUE CRIME",
    isNew: true
  },
  {
    id: 2,
    title: "Alex Jones Gives TERRIFYING UPDATE!! SHOCKING Epstein News has Elites SCRAMBLING to EXPLAIN!!",
    thumbnail: "https://i.ytimg.com/vi/eIn0IUqoX-8/maxresdefault.jpg",
    views: "201K views",
    duration: "22:47",
    uploadDate: "Today",
    url: "https://www.youtube.com/watch?v=eIn0IUqoX-8",
    category: "CONSPIRACY",
    isNew: true
  },
  {
    id: 3,
    title: "NEW SUSPECTS in Charlie Kirk Assassination!! The SHOCKING VIDEO EVIDENCE!!",
    thumbnail: "https://i.ytimg.com/vi/6q2CYqUPZ5c/maxresdefault.jpg",
    views: "178K views",
    duration: "24:18",
    uploadDate: "12 hours ago",
    url: "https://www.youtube.com/watch?v=6q2CYqUPZ5c",
    category: "POLITICS",
    isNew: true
  },
  {
    id: 4,
    title: "This VIDEO CLIP will BREAK THE WORLD!! Charlie SHOT Direction SOLVED!! IT WAS THEM!!",
    thumbnail: "https://i.ytimg.com/vi/7NUp1k3DT4U/maxresdefault.jpg",
    views: "264K views",
    duration: "21:06",
    uploadDate: "1 day ago",
    url: "https://www.youtube.com/watch?v=7NUp1k3DT4U",
    category: "INVESTIGATION"
  },
  {
    id: 5,
    title: "Hasan Piker ANIMAL ABUSE SCANDAL is INSANE! Destiny WAGES WAR on JD VANCE!!",
    thumbnail: "https://i.ytimg.com/vi/VMglO8gJuqE/maxresdefault.jpg",
    views: "193K views",
    duration: "23:12",
    uploadDate: "1 day ago",
    url: "https://www.youtube.com/watch?v=VMglO8gJuqE",
    category: "COMMENTARY"
  },
  {
    id: 6,
    title: "THREATENING TEXTS to Charlie Kirk LEAK! Charlie DISCUSSES ASSASSINATION DIRECTLY!",
    thumbnail: "https://i.ytimg.com/vi/PSf_e71tn24/maxresdefault.jpg",
    views: "221K views",
    duration: "25:04",
    uploadDate: "2 days ago",
    url: "https://www.youtube.com/watch?v=PSf_e71tn24",
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
