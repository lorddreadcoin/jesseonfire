"use client";

import Carousel3D, { Video3DData } from './Carousel3D';

// Jesse's ACTUAL most viral videos from the channel
const viralVideos: Video3DData[] = [
  {
    id: "1",
    title: "FBI Connected DIRECTLY to Donald Trump Assassination Attempt in NE...",
    views: "3.7M views",
    thumbnail: "https://i.ytimg.com/vi/D5MDzmxJquQ/maxresdefault.jpg",
    videoId: "D5MDzmxJquQ",
    duration: "32:45",
    uploadDate: "2 months ago",
    category: "#1 VIRAL"
  },
  {
    id: "2",
    title: "Donald Trump's Assassination Attempt has DEEP STATE Fingerprints...",
    views: "1.8M views",
    thumbnail: "https://i.ytimg.com/vi/pXRvJH4br0k/maxresdefault.jpg",
    videoId: "pXRvJH4br0k",
    duration: "28:12",
    uploadDate: "3 months ago",
    category: "CONSPIRACY"
  },
  {
    id: "3",
    title: "LEAKED Diddy Home Videos are INSANE & DISGUSTING!",
    views: "1.1M views",
    thumbnail: "https://i.ytimg.com/vi/10cLi9LV4nw/maxresdefault.jpg",
    videoId: "10cLi9LV4nw",
    duration: "25:33",
    uploadDate: "1 month ago",
    category: "EXPOSED"
  },
  {
    id: "4",
    title: "Diddy Witness: 'Beiber was GRAPED by 3 MEN & J-Lo ASSAULTED LITTLE...'",
    views: "1M views",
    thumbnail: "https://i.ytimg.com/vi/CHr9htxNOy8/maxresdefault.jpg",
    videoId: "CHr9htxNOy8",
    duration: "31:22",
    uploadDate: "2 weeks ago",
    category: "HOLLYWOOD"
  },
  {
    id: "5",
    title: "CHARLIE KIRK WAS SHOT FROM BEHIND!? Decoys, Lies, & GLOBAL...",
    views: "788K views",
    thumbnail: "https://i.ytimg.com/vi/ynzRsowWzpE/maxresdefault.jpg",
    videoId: "ynzRsowWzpE",
    duration: "27:18",
    uploadDate: "3 weeks ago",
    category: "INVESTIGATION"
  },
  {
    id: "6",
    title: "The WORLD will BURN after WHAT JUST HAPPENED! Watch this Video IMMEDIATELY!",
    views: "650K views",
    thumbnail: "https://i.ytimg.com/vi/F5LI3PKL_Rk/maxresdefault.jpg",
    videoId: "F5LI3PKL_Rk",
    duration: "26:44",
    uploadDate: "1 week ago",
    category: "BREAKING"
  }
];

const MostViral = () => {
  return (
    <Carousel3D 
      videos={viralVideos}
      title="Most Viral Videos"
      subtitle="Breaking the Internet • One Truth at a Time"
    />
  );
};

export default MostViral;
