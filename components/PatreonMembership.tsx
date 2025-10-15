"use client";

import { motion } from "framer-motion";
import { TIERS } from "@/lib/constants";

const PatreonMembership = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-obsidian to-charcoal">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl lg:text-6xl text-fire-orange mb-4 uppercase tracking-wider">
            BECOME A PATREON MEMBER
          </h2>
          <p className="text-xl text-ash-grey font-heading uppercase tracking-wide mb-2">
            creating Videos to ENTERTAIN the HEATHENS
          </p>
          <p className="text-lg text-ash-grey/80 max-w-3xl mx-auto">
            As a free member, you'll get updates on public and free exclusive posts. 
            Upgrade your membership and get access to exclusive benefits.
          </p>
        </motion.div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  {/* Fire Avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-fire-orange to-lava-red flex items-center justify-center shadow-fire-glow">
                      <span className="text-6xl animate-fire-flicker">🔥</span>
                    </div>
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
