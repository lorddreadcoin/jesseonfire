import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoCarousel from '@/components/VideoCarousel'
import LiveStreams from '@/components/LiveStreams'
import MostViral from '@/components/MostViral'
import ChannelNetwork from '@/components/ChannelNetwork'
import Sponsors from '@/components/Sponsors'
import PatreonMembership from '@/components/PatreonMembership'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import SubscribeCTA from '@/components/SubscribeCTA'
import InlineCTA from '@/components/InlineCTA'
import UrgentCTA from '@/components/UrgentCTA'
import type { VideoData } from '@/components/VideoCarousel'

// Jesse's ACTUAL LATEST Videos - REAL DATA from his channel
const realVideos: VideoData[] = [
  {
    id: 1,
    title: "Was Tyler Robinson SET UP by HIS BOYFRIEND??? NEW VIDEO of SUSPECT Matches his DESCRIPTION!",
    thumbnail: "https://i.ytimg.com/vi/DiiXCi--ryI/maxresdefault.jpg",
    views: "141K views",
    duration: "28:35",
    uploadDate: "18 hours ago",
    url: "https://youtu.be/DiiXCi--ryI",
    category: "TRUE CRIME",
    isNew: true
  },
  {
    id: 2,
    title: "Alex Jones Gives TERRIFYING UPDATE!! SHOCKING Epstein News has Elites SCRAMBLING to EXPLAIN!!",
    thumbnail: "https://i.ytimg.com/vi/sFj-v4qu6xg/maxresdefault.jpg",
    views: "104K views",
    duration: "26:47",
    uploadDate: "1 day ago",
    url: "https://youtu.be/sFj-v4qu6xg",
    category: "CONSPIRACY",
    isNew: true
  },
  {
    id: 3,
    title: "The WORLD will BURN after WHAT JUST HAPPENED! Watch this Video IMMEDIATELY! ...NOT Clickbait",
    thumbnail: "https://i.ytimg.com/vi/F5LI3PKL_Rk/maxresdefault.jpg",
    views: "379K views",
    duration: "26:44",
    uploadDate: "6 days ago",
    url: "https://youtu.be/F5LI3PKL_Rk",
    category: "BREAKING NEWS",
    isNew: false
  },
  {
    id: 4,
    title: "BOMBSHELL Change to FBI's Official Story on Charlie Kirk! Robinson CHARGED w WITNESS TAMPERING!",
    thumbnail: "https://i.ytimg.com/vi/AloqDcz7hU4/maxresdefault.jpg",
    views: "91K views",
    duration: "17 VPH",
    uploadDate: "7 days ago",
    url: "https://youtu.be/AloqDcz7hU4",
    category: "INVESTIGATION"
  },
  {
    id: 5,
    title: "China is BEHIND Charlie Kirk's ASSASSINATION!! -US Congresswoman Anna Paulina Luna!!",
    thumbnail: "https://i.ytimg.com/vi/vjZzvEh4VJY/maxresdefault.jpg",
    views: "72K views",
    duration: "30:57",
    uploadDate: "4 days ago",
    url: "https://youtu.be/vjZzvEh4VJY",
    category: "POLITICS"
  },
  {
    id: 6,
    title: "NEW SUSPECTS in Charlie Kirk Assassination!! The SHOCKING VIDEO EVIDENCE!!",
    thumbnail: "https://i.ytimg.com/vi/6q2CYqUPZ5c/maxresdefault.jpg",
    views: "214K views",
    duration: "24:18",
    uploadDate: "1 day ago",
    url: "https://youtu.be/6q2CYqUPZ5c",
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
      
      {/* Subscribe CTA - After Videos */}
      <section className="bg-dark-surface">
        <SubscribeCTA />
      </section>
      
      {/* About Section - Dark Surface Background */}
      <section id="about" className="bg-dark-surface">
        <About />
      </section>
      
      {/* Urgent CTA - After About */}
      <section className="bg-dark-surface">
        <UrgentCTA />
      </section>
      
      {/* Live Streams Section */}
      <section id="live" className="bg-dark-surface">
        <LiveStreams />
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
      
      {/* YouTube Member Bridge CTA */}
      <section className="bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4">
          <InlineCTA variant="member" />
        </div>
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
