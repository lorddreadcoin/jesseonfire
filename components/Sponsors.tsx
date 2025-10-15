"use client";

import { SPONSORS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/ui/CopyButton";
import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-12">
          Official Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PrizePicks Card */}
          <Card hover className="flex flex-col space-y-6">
            <div className="h-20 flex items-center justify-center">
              <Image
                src="/prizepicks-logo.png"
                alt={SPONSORS.prizepicks.name}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>

            <p className="text-lg text-gray-400">
              {SPONSORS.prizepicks.description}
            </p>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">Promo Code:</p>
              <div className="flex items-center gap-4">
                <code className="font-mono text-2xl text-orange-500 font-bold">
                  {SPONSORS.prizepicks.code}
                </code>
                <CopyButton text={SPONSORS.prizepicks.code} />
              </div>
            </div>

            <a
              href={SPONSORS.prizepicks.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <Button variant="primary" className="w-full">
                Claim $50 Bonus →
              </Button>
            </a>
          </Card>

          {/* YoKratom Card */}
          <Card hover className="flex flex-col space-y-6">
            <div className="h-20 flex items-center justify-center">
              <Image
                src="/yokratom-logo.png"
                alt={SPONSORS.yokratom.name}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>

            <p className="text-lg text-gray-400">
              {SPONSORS.yokratom.description}
            </p>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">Promo Code:</p>
              <div className="flex items-center gap-4">
                <code className="font-mono text-2xl text-orange-500 font-bold">
                  {SPONSORS.yokratom.code}
                </code>
                <CopyButton text={SPONSORS.yokratom.code} />
              </div>
            </div>

            <a
              href={SPONSORS.yokratom.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <Button variant="primary" className="w-full">
                Shop YoKratom →
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
