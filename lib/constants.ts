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
  patreon: "https://www.patreon.com/c/jesseonfire",
  discord: "https://discord.gg/jesseonfire",
  youtube: "https://youtube.com/@realjesseonfire",
  twitter: "https://twitter.com/realjesseonfire",
  instagram: "https://instagram.com/realjesseonfire"
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
    description: "Daily fantasy sports made simple. Play $5 and get $50 in bonus lineups instantly"
  },
  yokratom: {
    name: "Better Help",
    url: "https://betterhelp.com/jesseonfire",
    code: "JESSEONFIRE",
    description: "Professional online therapy. Get 10% off your first month"
  }
};

export interface Tier {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  featured?: boolean;
  description?: string;
}

export const TIERS: Tier[] = [
  {
    id: "member",
    name: "Jesse ON FIRE Member",
    price: 7.99,
    benefits: [
      "ALL VIDEO ACCESS",
      "At least 2 PATREON ONLY videos PER WEEK",
      "Celebrity CRUSHES (like Josh Fabia)",
      "Exclusive roast content"
    ],
    description: "When you join my Patreon, you get access to all my videos here, which will include at least 2 PATREON ONLY videos PER WEEK where I CRUSH celebrities who deserve it (just like Josh Fabia). Don't miss Bill Cosby..."
  },
  {
    id: "elite",
    name: "Jesse ON FIRE ELITE",
    price: 14.99,
    benefits: [
      "ALL VIDEO ACCESS",
      "EXCLUSIVE Elite Only Live Chat",
      "Direct access to JOF",
      "All Member tier benefits"
    ],
    featured: true,
    description: "This tier will access exclusive live chats that no one else has access to. If you really want direct access to JOF, this is the way there."
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
