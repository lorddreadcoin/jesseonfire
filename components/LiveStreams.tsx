"use client";

import Carousel3D, { Video3DData } from './Carousel3D';

// Jesse's MOST VIRAL Live Streams - MILLIONS OF VIEWS
const liveStreams: Video3DData[] = [
  {
    id: "1",
    title: "Trump SNIPER Makes SHOCKING Claim! WITNESS PROTECTION IMMEDIATELY!",
    thumbnail: "https://i.ytimg.com/vi/f-17aycj6vM/maxresdefault.jpg",
    views: "2.9M views",
    videoId: "f-17aycj6vM",
    duration: "2:45:33",
    uploadDate: "1 year ago",
    category: "LIVE STREAM",
    isLive: false
  },
  {
    id: "2",
    title: "IRAN Behind Trump Assassination PLOT!!?? Secret Service KNEW IT WAS COMING!!!",
    thumbnail: "https://i.ytimg.com/vi/sJiLjQ9f0w4/maxresdefault.jpg",
    views: "369K views",
    videoId: "sJiLjQ9f0w4",
    duration: "1:58:12",
    uploadDate: "1 year ago",
    category: "LIVE STREAM",
    isLive: false
  },
  {
    id: "3",
    title: "Donald Trump's REVENGE & the SHOOTER was with BLACKROCK!!! WHAT??????????",
    thumbnail: "https://i.ytimg.com/vi/CQYNGiK5ZAQ/maxresdefault.jpg",
    views: "349K views",
    videoId: "CQYNGiK5ZAQ",
    duration: "2:12:45",
    uploadDate: "1 year ago",
    category: "LIVE STREAM",
    isLive: false
  },
  {
    id: "4",
    title: "Joe Biden DROPS OUT! Their Plan is in PLAIN SIGHT! Donald Trump Needs TRIPLE SECURITY!",
    thumbnail: "https://i.ytimg.com/vi/IkOW6mcNJmM/maxresdefault.jpg",
    views: "158K views",
    videoId: "IkOW6mcNJmM",
    duration: "1:45:22",
    uploadDate: "1 year ago",
    category: "LIVE STREAM",
    isLive: false
  },
  {
    id: "5",
    title: "HULK HOGAN DEAD!! SHOCKING TRAGIC DETAILS HAVE ME TERRIFIED!!",
    thumbnail: "https://i.ytimg.com/vi/IpGdtysiyU0/maxresdefault.jpg",
    views: "149K views",
    videoId: "IpGdtysiyU0",
    duration: "2:33:18",
    uploadDate: "2 months ago",
    category: "LIVE STREAM",
    isLive: false
  },
  {
    id: "6",
    title: "BREAKING: Trump Shooter EXPOSED! Deep State Connection CONFIRMED!",
    thumbnail: "https://i.ytimg.com/vi/sFj-v4qu6xg/maxresdefault.jpg",
    views: "125K views",
    videoId: "sFj-v4qu6xg",
    duration: "1:52:45",
    uploadDate: "3 weeks ago",
    category: "LIVE STREAM",
    isLive: false
  }
];

const LiveStreams = () => {
  return (
    <Carousel3D 
      videos={liveStreams}
      title="🔴 MOST VIRAL LIVE STREAMS 🔴"
      subtitle="The Explosive Streams That Got MILLIONS of Views"
    />
  );
};

export default LiveStreams;
