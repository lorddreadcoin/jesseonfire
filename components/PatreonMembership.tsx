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
            Support Jesse & Get Instant Discord Access
          </p>
          <p className="text-lg text-fire-orange/80 font-bold">
            Patreon Members Get Automatic Discord Access via Bot
          </p>
        </motion.div>

        {/* Discord Access Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-fire-orange/20 via-lava-red/20 to-fire-orange/20 rounded-2xl p-6 border-2 border-fire-orange/30">
            <p className="text-white text-center text-lg">
              Join Patreon → Patreon Bot <span className="text-fire-orange font-bold">AUTOMATICALLY</span> gives you Discord access
            </p>
            <p className="text-ash-grey text-center text-sm mt-2">
              Already a YouTube member? Use the YouTube bridge above to link your membership
            </p>
          </div>
        </motion.div>

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
