"use client";

import Card from "@/components/ui/Card";
import Image from "next/image";

const VideoHighlights = () => {
  // Placeholder video data
  const placeholderVideos = [
    {
      id: 1,
      title: "Celebrity Roast Compilation: No Survivors",
      thumbnail: "/video-thumb-1.jpg",
      views: "1.2M views",
    },
    {
      id: 2,
      title: "UFC 300 Breakdown: Predictions That Aged Well",
      thumbnail: "/video-thumb-2.jpg",
      views: "850K views",
    },
    {
      id: 3,
      title: "Comedy Store Set: New Material KILLS",
      thumbnail: "/video-thumb-3.jpg",
      views: "650K views",
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
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
          {placeholderVideos.map((video) => (
            <Card key={video.id} hover className="cursor-pointer group">
              <div className="space-y-4">
                <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.jpg"
                    alt={video.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHighlights;
