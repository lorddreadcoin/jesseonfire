"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/ui/CopyButton";
import Image from "next/image";

const SPONSORS = [
  {
    name: "PrizePicks",
    description: "Daily fantasy sports made simple. Play $5 and get $50 in bonus lineups instantly",
    logo: "/prizepicks-logo.png",
    code: "JESSEONFIRE",
    link: "https://prizepicks.onelink.me/ivHR/JESSEONFIRE",
    bonus: "Get $50",
    fallbackColor: "bg-gradient-to-br from-green-500 to-green-700",
    fallbackText: "PP"
  },
  {
    name: "Magic Mind",
    description: "The world's first productivity shot. Get 20% off your subscription",
    logo: "/magicmind-logo.png",
    code: "JESSEFIRE20",
    link: "https://magicmind.co/jessefire",
    bonus: "20% Off",
    fallbackColor: "bg-gradient-to-br from-purple-500 to-blue-600",
    fallbackText: "MM"
  },
  {
    name: "Better Help",
    description: "Professional online therapy. Get 10% off your first month of therapy",
    logo: "/betterhelp-logo.png",
    code: "JESSEONFIRE",
    link: "https://betterhelp.com/jesseonfire",
    bonus: "10% Off",
    fallbackColor: "bg-gradient-to-br from-teal-500 to-cyan-600",
    fallbackText: "BH"
  }
];

const Sponsors = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-12">
          Official Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPONSORS.map((sponsor) => (
            <Card hover key={sponsor.name} className="flex flex-col space-y-6">
              {/* Logo with Fallback */}
              <div className="h-20 flex items-center justify-center">
                <div className={`${sponsor.fallbackColor} w-full max-w-[200px] h-20 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg`}>
                  <span className="text-3xl font-black text-white z-10">{sponsor.fallbackText}</span>
                  <span className="absolute bottom-1 right-2 text-xs text-white/70 font-medium">{sponsor.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={80}
                    className="object-contain absolute inset-0 w-full h-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400">
                {sponsor.description}
              </p>

              {/* Promo Code */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Promo Code:</p>
                <div className="flex items-center gap-4">
                  <code className="font-mono text-2xl text-orange-500 font-bold">
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
                <Button variant="primary" className="w-full">
                  Claim {sponsor.bonus} →
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
