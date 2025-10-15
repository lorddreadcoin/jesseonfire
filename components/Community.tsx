"use client";

import { TIERS, LINKS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const Community = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Where Real Conversations Happen
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join the inner circle. Uncensored content. Direct access. No algorithm bullshit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TIERS.map((tier) => (
            <Card key={tier.id} hover className="relative flex flex-col">
              {tier.featured && (
                <div className="absolute -top-4 right-4 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-bold text-white">
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-orange-500">
                    ${tier.price}
                  </span>
                  <span className="text-gray-400">/mo</span>
                </div>

                <ul className="space-y-3 pt-4">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={LINKS.patreon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant={tier.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Choose {tier.name}
                  </Button>
                </a>
              </div>
            </Card>
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
