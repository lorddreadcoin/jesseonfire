"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TIERS } from "@/lib/constants";

const PatreonMembership = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-obsidian to-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl lg:text-6xl text-fire-orange mb-4 uppercase tracking-wider">
            JOIN THE WARRIORS
          </h2>
          <p className="text-xl text-ash-grey font-heading uppercase tracking-wide mb-2">
            Support Jesse & Get Exclusive Access
          </p>
        </motion.div>

        {/* Two Column Layout: YouTube Memberships LEFT | Patreon RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* LEFT: YOUTUBE MEMBERSHIPS - MASSIVE & BOLD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 shadow-2xl border-4 border-red-500 hover:border-red-400 transition-all">
              {/* YouTube Logo & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FF0000">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-display text-3xl uppercase">YouTube Members</h3>
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                  </div>
                </div>
              </div>

              {/* Big Bold Message */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border-2 border-white/20">
                <p className="text-white text-2xl font-bold mb-3 uppercase text-center">
                  🔥 YO! YOU GET THE PLUG! 🔥
                </p>
                <p className="text-white/90 text-lg text-center mb-4">
                  Already a YouTube Member? You're a LOYAL WARRIOR!
                </p>
                <p className="text-white/80 text-center">
                  Get instant Discord access with your YouTube membership - NO DOUBLE PAYMENT!
                </p>
              </div>

              {/* YouTube Membership Tiers */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold text-lg">Jesse's Inner Circle</h4>
                    <span className="text-white font-bold text-xl">$4.99</span>
                  </div>
                  <p className="text-white/80 text-sm">5 extra MMA videos/week</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold text-lg">Jesse's Best Friends</h4>
                    <span className="text-white font-bold text-xl">$9.99</span>
                  </div>
                  <p className="text-white/80 text-sm">Weekly member streams</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold text-lg">You Love Me & You Know It</h4>
                    <span className="text-white font-bold text-xl">$24.99</span>
                  </div>
                  <p className="text-white/80 text-sm">Monthly shoutouts</p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="/youtube-members"
                className="block mt-6"
              >
                <button className="w-full bg-white text-red-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all text-lg uppercase shadow-lg">
                  🔗 Link Your YouTube Membership
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: PATREON PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-fire-orange/20 to-lava-red/20 rounded-3xl p-8 border-2 border-fire-orange/30 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-fire-orange rounded-full p-3">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-white font-display text-3xl uppercase">Patreon</h3>
              </div>

              <p className="text-white/90 text-lg mb-6">
                Want even MORE exclusive content? Check out our Patreon tiers below!
              </p>

              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-4">5 Exclusive Tiers Available</p>
                  <div className="flex gap-2 justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-fire-orange/30 border-2 border-fire-orange"></div>
                    <div className="w-12 h-12 rounded-full bg-fire-orange/30 border-2 border-fire-orange"></div>
                    <div className="w-12 h-12 rounded-full bg-fire-orange/30 border-2 border-fire-orange"></div>
                    <div className="w-12 h-12 rounded-full bg-fire-orange/30 border-2 border-fire-orange"></div>
                    <div className="w-12 h-12 rounded-full bg-fire-orange/30 border-2 border-fire-orange"></div>
                  </div>
                  <p className="text-white/80 text-sm">Scroll down to see all Patreon options →</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PATREON Membership Cards - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-center text-white font-display text-4xl uppercase mb-8">
            Patreon Membership Tiers
          </h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {TIERS.map((tier, index) => (
            <motion.div 
              key={tier.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-charcoal to-obsidian rounded-2xl border border-fire-orange/20 overflow-hidden shadow-2xl hover:shadow-fire-glow-lg transition-all">
                {/* Image Header */}
                <div className="relative h-64 bg-gradient-to-br from-fire-orange/30 to-lava-red/30">
                  {tier.featured && (
                    <div className="absolute top-4 right-4 bg-white/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                      YOU MIGHT LIKE
                    </div>
                  )}
                  {/* Tier Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {tier.image ? (
                      <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-fire-glow">
                        <Image
                          src={tier.image}
                          alt={tier.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-fire-orange to-lava-red flex items-center justify-center shadow-fire-glow">
                        <span className="text-6xl animate-fire-flicker">🔥</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="font-heading text-2xl text-white mb-4">
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-5xl text-fire-orange">
                      ${tier.price}
                    </span>
                    <span className="text-ash-grey">/ month</span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://www.patreon.com/c/jesseonfire/membership`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-6"
                  >
                    <button className="w-full bg-white text-black font-bold py-4 px-6 rounded-xl hover:bg-ash-grey transition-all text-lg">
                      Upgrade
                    </button>
                  </a>

                  {/* Description */}
                  {tier.description && (
                    <p className="text-sm text-ash-grey mb-6 leading-relaxed">
                      {tier.description}
                    </p>
                  )}

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <span className="text-fire-orange mt-1">•</span>
                        <span className="text-white text-sm font-medium uppercase tracking-wide">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-ash-grey mb-4">
            Get more from your favorite creators on the app.
          </p>
          <a
            href="https://www.patreon.com/c/jesseonfire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-fire text-xl px-8 py-4">
              View Full Patreon Page →
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PatreonMembership;
