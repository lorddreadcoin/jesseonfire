"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/ui/CopyButton";
import Image from "next/image";

const SPONSORS = [
  {
    name: "PrizePicks",
    description: "Daily fantasy sports made simple. Play $5 and get $50 in bonus lineups instantly",
    logo: "/img/sponsor-prizepicks.png", // PrizePicks logo - local
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
    logo: "/img/sponsor-kratom.png", // YoKratom logo - local
    code: "JESSEONFIRE",
    link: "https://yokratom.com",
    bonus: "20% Off",
    fallbackColor: "bg-gradient-to-br from-amber-500 to-orange-600",
    fallbackText: "YK",
    hasLogo: true
  }
];

const Sponsors = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <h2 className="ot-council-title text-center mb-12">
          Official Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SPONSORS.map((sponsor) => (
            <div key={sponsor.name} className="card-cinematic hover:shadow-fire-glow-lg transition-all duration-300 hover:scale-105 flex flex-col space-y-6">
              {/* Logo - CINEMATIC */}
              <div className="h-28 flex items-center justify-center p-4 bg-white/5 rounded-xl">
                {sponsor.hasLogo ? (
                  <div className="relative w-full h-full max-w-[260px] flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`${sponsor.fallbackColor} w-full max-w-[200px] h-20 rounded-lg flex items-center justify-center relative overflow-hidden shadow-fire-glow`}>
                    <span className="ot-council-heading text-white z-10">{sponsor.fallbackText}</span>
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
                  <code className="ot-council-text">
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
