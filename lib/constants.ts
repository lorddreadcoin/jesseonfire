// Site configuration and constants with strict TypeScript types

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Jesse ON FIRE",
  tagline: "Uncensored. Unfiltered. On Fire.",
  description: "Political analyst. MMA lifer. Truth speaker. Purple Belt on the mat, Black Belt on the mic."
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
    "Jesse ON FIRE isn't just a stage name—it's a warning. This political analyst and MMA lifer brings the same intensity to truth-telling that he brings to the mat as a Purple Belt under Six Blades BJJ.",
    "From exposing political puppet masters to breaking down UFC conspiracies, Jesse has built a massive following by combining fearless commentary with deep knowledge of combat sports and world events. His unique perspective as an MMA insider and independent voice gives him credibility that mainstream media can't match.",
    "Whether he's streaming live, dropping truth bombs on YouTube, or calling out the establishment on social media, Jesse keeps it 100% uncensored. No corporate overlords, no narrative control—just pure, unfiltered fire."
  ],
  pullQuote: "They want you silent. They want you compliant. They want you watching their approved narratives. I'm here to burn it all down with truth.",
  stats: [
    { label: "YouTube Subscribers", value: "516K+" },
    { label: "BJJ Rank", value: "Purple Belt" },
    { label: "Years in MMA", value: "10+" },
    { label: "Truth Bombs Dropped", value: "∞" }
  ]
};
