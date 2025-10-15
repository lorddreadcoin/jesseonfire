"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/ui/CopyButton";
import Image from "next/image";

const SPONSORS = [
  {
    name: "PrizePicks",
    description: "Daily fantasy sports made simple. Play $5 and get $50 in bonus lineups instantly",
    logo: "https://i.imgur.com/VJmi74t.png", // PrizePicks logo - correct link
    code: "JESSEONFIRE",
    link: "https://prizepicks.onelink.me/ivHR/JESSEONFIRE",
    bonus: "Get $50",
    fallbackColor: "bg-gradient-to-br from-purple-600 to-purple-800",
    fallbackText: "PP",
    hasLogo: true
  },
  {
    name: "YoKratom",
    description: "Premium kratom products for focus and energy. Save 20% with your first order",
    logo: "https://i.imgur.com/f6u1FC1.png", // YoKratom logo - FIXED link
    code: "JESSEONFIRE",
    link: "https://yokratom.com",
    bonus: "20% Off",
    fallbackColor: "bg-gradient-to-br from-amber-500 to-orange-600",
    fallbackText: "YK",
    hasLogo: true
  },
  {
    name: "Magic Mind",
    description: "The world's first productivity shot. Get 20% off your subscription",
    logo: "/images/magicmind-logo.png",
    code: "JESSEFIRE20",
    link: "https://magicmind.co/jessefire",
    bonus: "20% Off",
    fallbackColor: "bg-gradient-to-br from-purple-500 to-blue-600",
    fallbackText: "MM",
    hasLogo: false
  }
];

const Sponsors = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl lg:text-6xl text-center text-fire-orange mb-12 uppercase tracking-wider">
          Official Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPONSORS.map((sponsor) => (
            <div key={sponsor.name} className="card-cinematic hover:shadow-fire-glow-lg transition-all duration-300 hover:scale-105 flex flex-col space-y-6">
              {/* Logo - CINEMATIC */}
              <div className="h-24 flex items-center justify-center p-4 bg-white/5 rounded-xl">
                {sponsor.hasLogo ? (
                  <div className="relative w-full max-w-[220px] h-full flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={200}
                      height={80}
                      className="object-contain"
                      unoptimized // For external images
                    />
                  </div>
                ) : (
                  <div className={`${sponsor.fallbackColor} w-full max-w-[200px] h-20 rounded-lg flex items-center justify-center relative overflow-hidden shadow-fire-glow`}>
                    <span className="text-3xl font-display text-white z-10">{sponsor.fallbackText}</span>
                    <span className="absolute bottom-1 right-2 text-xs font-heading text-white/70">{sponsor.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
              </div>

              {/* Description - CINEMATIC */}
              <p className="text-lg text-ash-grey">
                {sponsor.description}
              </p>

              {/* Promo Code - FIRE EDITION */}
              <div className="space-y-2">
                <p className="text-sm font-heading uppercase text-ash-grey/70 tracking-wide">Promo Code:</p>
                <div className="flex items-center gap-4">
                  <code className="font-display text-3xl text-fire-orange">
                    {sponsor.code}
                  </code>
                  <CopyButton text={sponsor.code} />
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <button className="btn-fire w-full text-lg">
                  Claim {sponsor.bonus} →
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
