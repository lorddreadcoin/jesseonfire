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
  description: "516K+ Warriors Strong. Exposing Truth Daily.",
  url: "https://jesseonfire.com",
  creator: "@realjesseonfire"
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
  headline: "516K Warriors & Growing Daily",
  paragraphs: [
    "Jesse ON FIRE isn't just a stage name—it's a warning. With 516,000+ subscribers and 127 million views, this political analyst and Purple Belt BJJ practitioner brings combat intensity to truth-telling.",
    "Dropping 3-4 videos daily on everything from Charlie Kirk conspiracies to Epstein revelations, Jesse has become the independent voice that mainstream media fears. 1,200+ videos deep, still uncensored, still undefeated.",
    "Whether he's exposing government corruption, breaking down MMA politics, or going OFF THE RAILS on his latest investigation, Jesse delivers what his army demands: pure, unfiltered truth that makes the establishment panic."
  ],
  pullQuote: "516,000 strong and growing. They tried to silence us. Now we're too big to stop.",
  stats: [
    { label: "YouTube Warriors", value: "516K+" },
    { label: "Total Destruction", value: "127M+ Views" },
    { label: "Videos Uploaded", value: "1,200+" },
    { label: "Daily Uploads", value: "3-4 Videos" }
  ]
};
