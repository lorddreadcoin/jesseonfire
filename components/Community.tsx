"use client";

import { TIERS, LINKS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const Community = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl lg:text-6xl text-fire-orange mb-4 uppercase tracking-wider">
            Join the Patreon Army
          </h2>
          <p className="text-xl text-ash-grey max-w-3xl mx-auto font-sans mb-2">
            Get access to exclusive content. Direct access. No algorithm bullshit.
          </p>
          <p className="text-lg text-fire-orange font-heading">
            Videos to ENTERTAIN the HEATHENS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {TIERS.map((tier) => (
            <div key={tier.id} className="relative group">
              {/* Card Container */}
              <div className="card-cinematic hover:shadow-fire-glow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full">
                {/* Header Image Section */}
                <div className="relative h-48 -m-6 mb-6 bg-gradient-to-br from-fire-orange/20 to-lava-red/20 rounded-t-xl overflow-hidden">
                  {tier.featured && (
                    <div className="absolute top-4 right-4 bg-electric-steel text-white text-xs font-display uppercase px-3 py-1 rounded-full shadow-lg tracking-wider z-10">
                      YOU MIGHT LIKE
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl animate-fire-flicker">
                      {tier.id === "elite" ? "🔥" : "🔥"}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 flex-grow">
                  <h3 className="font-heading text-2xl text-white">
                    {tier.name}
                  </h3>

                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl text-fire-gradient bg-clip-text text-transparent">
                      ${tier.price}
                    </span>
                    <span className="text-ash-grey font-sans">/ month</span>
                  </div>

                  {/* Description */}
                  {tier.description && (
                    <p className="text-sm text-ash-grey leading-relaxed">
                      {tier.description}
                    </p>
                  )}

                  <ul className="space-y-3 pt-4">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-fire-orange text-lg">•</span>
                        <span className="text-white font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.patreon.com/c/jesseonfire/membership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button
                      className={tier.featured ? "btn-fire w-full text-lg" : "bg-white text-black font-display uppercase px-6 py-3 rounded-xl hover:bg-ash-grey transition-all w-full text-lg font-bold"}
                    >
                      Upgrade
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <a
            href={LINKS.patreon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="text-lg px-8 py-4">
              Join the Patreon
            </Button>
          </a>
          <div>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors font-semibold"
            >
              Enter Discord →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
