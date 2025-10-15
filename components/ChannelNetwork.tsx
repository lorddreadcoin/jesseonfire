"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import { LINKS } from "@/lib/constants";

const channels = [
  {
    name: "Jesse ON FIRE",
    description: "Main Channel - Black Belt Mic Skills 🥋",
    stats: "517K+ Subscribers • 111M+ Views",
    url: LINKS.youtube,
    color: "from-fire-orange to-lava-red",
    icon: FaYoutube,
    isPrimary: true
  },
  {
    name: "PLAY W MATCHES",
    description: "With Wife Gabi - Behind the Scenes",
    stats: "Growing Channel • Exclusive Content",
    url: LINKS.playWithMatches,
    color: "from-purple-600 to-pink-600",
    icon: FaYoutube
  },
  {
    name: "Jesse On FIRE After Hours",
    description: "Late Night Content for the Real Ones",
    stats: "After Dark • Unfiltered",
    url: LINKS.afterHours,
    color: "from-blue-600 to-purple-600",
    icon: FaYoutube
  }
];

const socials = [
  { name: "Instagram", icon: FaInstagram, url: LINKS.instagram, color: "hover:text-pink-500" },
  { name: "Twitter/X", icon: FaTwitter, url: LINKS.twitter, color: "hover:text-blue-400" },
  { name: "TikTok", icon: FaTiktok, url: LINKS.tiktok || "", color: "hover:text-white" }
];

const ChannelNetwork = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-charcoal to-obsidian">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl lg:text-6xl text-fire-orange mb-4 uppercase tracking-wider">
            The Jesse Empire
          </h2>
          <p className="text-xl text-ash-grey font-heading uppercase">
            18 Years • Multiple Channels • One Voice
          </p>
        </motion.div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {channels.map((channel, index) => (
            <motion.a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`card-cinematic hover:shadow-fire-glow-lg transition-all ${channel.isPrimary ? 'ring-2 ring-fire-orange' : ''}`}>
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${channel.color} rounded-t-xl`} />
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-2xl text-white mb-1">
                        {channel.name}
                      </h3>
                      {channel.isPrimary && (
                        <span className="text-xs bg-fire-orange/20 text-fire-orange px-2 py-1 rounded-full font-bold uppercase">
                          Main Channel
                        </span>
                      )}
                    </div>
                    <channel.icon className="text-3xl text-red-600" />
                  </div>
                  
                  <p className="text-ash-grey mb-3">
                    {channel.description}
                  </p>
                  
                  <p className="text-sm text-ash-grey/70">
                    {channel.stats}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-ash-grey mb-4 font-heading uppercase tracking-wide">
            Follow Everywhere
          </p>
          <div className="flex justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-ash-grey ${social.color} transition-all hover:scale-110`}
                aria-label={social.name}
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
          
          {/* Stats Summary */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm border border-fire-orange/20">
              <div className="text-2xl font-display text-fire-orange">517K+</div>
              <div className="text-xs text-ash-grey uppercase">Subscribers</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm border border-fire-orange/20">
              <div className="text-2xl font-display text-fire-orange">2,863</div>
              <div className="text-xs text-ash-grey uppercase">Videos</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm border border-fire-orange/20">
              <div className="text-2xl font-display text-fire-orange">111M+</div>
              <div className="text-xs text-ash-grey uppercase">Total Views</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm border border-fire-orange/20">
              <div className="text-2xl font-display text-fire-orange">18</div>
              <div className="text-xs text-ash-grey uppercase">Years Strong</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChannelNetwork;
