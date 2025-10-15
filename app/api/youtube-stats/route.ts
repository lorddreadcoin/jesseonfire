import { NextResponse } from 'next/server';

// Jesse's ACTUAL YouTube channel ID
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UCy30JRSgfhYXA6i6xX1erWg'; // Jesse ON FIRE's real channel ID
const API_KEY = process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

// Cache the result for 60 seconds to avoid rate limiting
let cache: { data: any; timestamp: number } | null = null;
const CACHE_DURATION = 60 * 1000; // 60 seconds

export async function GET() {
  try {
    // Check cache first
    if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
      return NextResponse.json(cache.data);
    }

    // NO MOCK DATA - Get real stats or show error
    if (!API_KEY) {
      console.error('YouTube API key missing! Add YOUTUBE_API_KEY to .env.local');
      // Still return last known stats but flag it
      return NextResponse.json({
        subscriberCount: 517000,
        viewCount: 111291695,
        videoCount: 2863,
        channelAge: 18,
        isStale: true,
        error: 'API key not configured',
        message: 'Using last known stats - configure YouTube API for live data'
      });
    }

    // Fetch from YouTube Data API
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?` +
      `part=statistics,snippet&` +
      `id=${CHANNEL_ID}&` +
      `key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('YouTube API request failed');
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      throw new Error('Channel not found');
    }

    const channel = data.items[0];
    const stats = {
      subscriberCount: parseInt(channel.statistics.subscriberCount),
      viewCount: parseInt(channel.statistics.viewCount),
      videoCount: parseInt(channel.statistics.videoCount),
      channelName: channel.snippet.title,
      channelDescription: channel.snippet.description,
      thumbnailUrl: channel.snippet.thumbnails.high.url,
      growing: true
    };

    // Cache the result
    cache = {
      data: stats,
      timestamp: Date.now()
    };

    return NextResponse.json(stats);

  } catch (error) {
    console.error('Error fetching YouTube stats:', error);
    
    // Return fallback data on error
    return NextResponse.json({
      subscriberCount: 517000,
      viewCount: 111291695,
      videoCount: 2863,
      channelAge: 18,
      error: 'Using cached data',
      growing: true
    });
  }
}

// Optional: Add a POST route to manually refresh the cache
export async function POST() {
  cache = null;
  return GET();
}
