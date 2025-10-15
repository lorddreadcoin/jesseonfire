import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoHighlights from '@/components/VideoHighlights'
import Sponsors from '@/components/Sponsors'
import Community from '@/components/Community'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Section - Full Viewport */}
      <Hero />
      
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

      {/* Background Gradient Orbs for Visual Interest */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fire-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fire-secondary/10 rounded-full blur-3xl" />
      </div>
    </main>
  )
}
