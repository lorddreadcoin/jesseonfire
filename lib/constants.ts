// Site configuration and constants with strict TypeScript types

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  creator: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Jesse ON FIRE",
  tagline: "Uncensored. Unfiltered. Undefeated.",
  description: "517K+ Warriors Strong. Black Belt Mic Skills. 🥋",
  url: "https://jesseonfire.com",
  creator: "@realjesseonfire"
};

export interface Links {
  patreon: string;
  discord: string;
  youtube: string;
  twitter: string;
  instagram: string;
  tiktok?: string;
  playWithMatches?: string;
  afterHours?: string;
}

export const LINKS: Links = {
  patreon: "https://www.patreon.com/c/jesseonfire",
  discord: "https://discord.gg/jesseonfire",
  youtube: "https://youtube.com/@RealJesseONFIRE",
  twitter: "https://twitter.com/realjesseonfire",
  instagram: "https://instagram.com/realjesseonfire",
  tiktok: "https://tiktok.com/@jesseonfire",
  playWithMatches: "https://youtube.com/channel/UCMgZRuOPSceek0sGfoVkJ9Q",
  afterHours: "https://youtube.com/channel/UCy4B2chgtradV0T7EFUURSA"
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
  headline: "517K Warriors & 18 Years Strong",
  paragraphs: [
    "Jesse ON FIRE is the YOUTUBE GOAT on the mic. With 517,000+ subscribers and 111 million views, this political analyst and Purple Belt BJJ practitioner has been exposing truth since 2006. Black Belt mic skills. 🥋",
    "With 2,863 videos and counting, Jesse drops content daily on everything from political conspiracies to MMA breakdowns. Running multiple channels including PLAY W MATCHES with wife Gabi and Jesse On FIRE After Hours for the real ones.",
    "Whether he's exposing government corruption, breaking down UFC politics, or going OFF THE RAILS on his latest investigation, Jesse delivers what his army demands: pure, unfiltered truth that makes the establishment panic."
  ],
  pullQuote: "517,000 strong. 18 years on YouTube. They couldn't stop us then, they can't stop us now.",
  stats: [
    { label: "YouTube Warriors", value: "517K+" },
    { label: "Total Views", value: "111M+" },
    { label: "Videos Uploaded", value: "2,863" },
    { label: "Years on YouTube", value: "18" }
  ]
};
