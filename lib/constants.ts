// Site configuration and constants with strict TypeScript types

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Jesse ON FIRE",
  tagline: "Uncensored. Unfiltered. On Fire.",
  description: "Political analyst. MMA lifer. Truth speaker. Black Belt on the mat & the mic."
};

export interface Links {
  patreon: string;
  discord: string;
  youtube: string;
  twitter: string;
  instagram: string;
}

export const LINKS: Links = {
  patreon: "https://patreon.com/jesseonfire",
  discord: "https://discord.gg/jesseonfire",
  youtube: "https://youtube.com/@jesseonfire",
  twitter: "https://twitter.com/jesseonfire",
  instagram: "https://instagram.com/jesseonfire"
};

export interface Sponsor {
  name: string;
  url: string;
  code: string;
  description: string;
}

export interface Sponsors {
  prizepicks: Sponsor;
  yokratom: Sponsor;
}

export const SPONSORS: Sponsors = {
  prizepicks: {
    name: "PrizePicks",
    url: "https://prizepicks.onelink.me/ivHR/JESSEONFIRE",
    code: "JESSEONFIRE",
    description: "Daily fantasy sports made simple. Use code JESSEONFIRE for a deposit match up to $100"
  },
  yokratom: {
    name: "Yo Kratom",
    url: "https://yokratom.com",
    code: "JESSEONFIRE",
    description: "Premium kratom products for focus and energy. Save 20% with code JESSEONFIRE"
  }
};

export interface Tier {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  featured?: boolean;
}

export const TIERS: Tier[] = [
  {
    id: "spark",
    name: "Spark",
    price: 5,
    benefits: [
      "Access to exclusive content",
      "Early access to new videos",
      "Member-only Discord channel",
      "Monthly Q&A streams"
    ]
  },
  {
    id: "flame",
    name: "Flame",
    price: 15,
    benefits: [
      "Everything in Spark tier",
      "Behind-the-scenes content",
      "Priority response in Discord",
      "Vote on future roast topics",
      "Monthly exclusive podcast episode"
    ],
    featured: true
  },
  {
    id: "inferno",
    name: "Inferno",
    price: 35,
    benefits: [
      "Everything in Flame tier",
      "Personal shoutout in videos",
      "1-on-1 monthly video call",
      "Custom roast video requests",
      "Merch discounts (50% off)",
      "VIP meet & greet at live shows"
    ]
  }
];

export interface BioStats {
  label: string;
  value: string;
}

export interface Bio {
  headline: string;
  paragraphs: string[];
  pullQuote: string;
  stats: BioStats[];
}

export const BIO: Bio = {
  headline: "Black Belt Mic Skills",
  paragraphs: [
    "Jesse ON FIRE isn't just a stage name—it's a warning. This comedian brings the same intensity to stand-up that he once brought to the MMA cage, delivering knockout punchlines with surgical precision.",
    "From roasting celebrities to breaking down fight cards, Jesse has built a loyal following by combining razor-sharp wit with genuine passion for combat sports and comedy. His unique perspective as a former fighter turned comedian gives him an edge that audiences can't resist.",
    "Whether he's on stage, streaming, or dropping hot takes on social media, Jesse keeps it 100% authentic. No filters, no holding back—just pure, unfiltered fire."
  ],
  pullQuote: "I approach comedy like I approached fighting: Study your opponent, find the weakness, and strike with precision. The only difference? In comedy, everyone leaves happy.",
  stats: [
    { label: "Years in Comedy", value: "8+" },
    { label: "Live Shows", value: "500+" },
    { label: "Roasts Delivered", value: "10K+" },
    { label: "Followers", value: "250K+" }
  ]
};
