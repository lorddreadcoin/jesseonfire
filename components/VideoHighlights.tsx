"use client";

import Card from "@/components/ui/Card";
import Image from "next/image";
import { useState } from "react";

const VideoHighlights = () => {
  const [featuredVideoId] = useState("kCQY91tGkKg"); // Jesse ON FIRE actual video

  const VIDEOS = [
    {
      id: 1,
      title: "Celebrity Roast Compilation: No Survivors",
      views: "1.2M views",
      thumbnail: "https://i.ytimg.com/vi/kCQY91tGkKg/maxresdefault.jpg",
      videoId: "kCQY91tGkKg",
      url: "https://youtube.com/watch?v=kCQY91tGkKg",
    },
    {
      id: 2,
      title: "MMA Fighter EXPOSED: The Truth They're Hiding",
      views: "856K views",
      thumbnail: "https://i.ytimg.com/vi/NfIMwVkyzNk/maxresdefault.jpg",
      videoId: "NfIMwVkyzNk",
      url: "https://youtube.com/watch?v=NfIMwVkyzNk",
    },
    {
      id: 3,
      title: "Political Puppet Masters: Follow The Money",
      views: "2.1M views",
      thumbnail: "https://i.ytimg.com/vi/A3-U9KXpzR8/maxresdefault.jpg",
      videoId: "A3-U9KXpzR8",
      url: "https://youtube.com/watch?v=A3-U9KXpzR8",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-12">
          Latest Fire
        </h2>

        {/* Main Featured Video */}
        <div className="mb-12">
          <div className="relative w-full aspect-video bg-gray-800 rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${featuredVideoId}`}
              title="Featured Video"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEOS.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer group block"
            >
              <div className="space-y-4">
                <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-3 group-hover:bg-orange-500/80 transition-colors">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{video.views}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHighlights;
