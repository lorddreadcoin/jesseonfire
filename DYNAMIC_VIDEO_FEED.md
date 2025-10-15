# 🔥 Dynamic Video Feed System - Jesse ON FIRE

## How It Works

The video carousel is designed to be a **LIVE FEED** of Jesse's most recent uploads, automatically updating as he posts new content.

### Current Implementation (Static Preview)
The site currently shows a preview of what the feed would look like with Jesse's recent viral content:
- Charlie Kirk assassination/witness tampering stories
- Epstein files and elite exposés  
- Alex Jones updates
- MMA conspiracies
- OFF THE RAILS episodes

### Future Implementation (Dynamic Feed)

#### Automatic Updates
- **New videos appear at position #1** (leftmost/first slide)
- Previous videos shift right automatically
- Oldest video drops off when limit reached (10-12 videos)
- **NEW UPLOAD** badge shows for videos < 24 hours old

#### Update Frequency
Jesse uploads **3-4 times per day** sometimes, so the feed needs to:
- Check YouTube API every 30 minutes
- Update immediately when new video detected
- Cache thumbnails and metadata locally
- Handle rate limiting gracefully

### Visual Indicators

#### New Videos Get:
- 🔥 **NEW UPLOAD** badge (fire gradient, pulsing)
- Orange ring glow effect
- First position in carousel
- Larger card size (optional enhancement)

#### Categories:
- **POLITICS** - Charlie Kirk, political commentary
- **CONSPIRACY** - Epstein, government exposés
- **MMA** - UFC, Dana White, fighter drama
- **ROAST** - Celebrity takedowns, beef content

### Technical Implementation

```javascript
// Fetch latest videos from YouTube API
const fetchLatestVideos = async () => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?
    key=${YOUTUBE_API_KEY}&
    channelId=${JESSE_CHANNEL_ID}&
    part=snippet,id&
    order=date&
    maxResults=12`);
  
  const data = await response.json();
  return formatVideosForCarousel(data.items);
};

// Update carousel every 30 minutes
setInterval(fetchLatestVideos, 30 * 60 * 1000);
```

### Benefits

1. **Always Fresh** - Visitors see Jesse's latest content immediately
2. **Engagement** - NEW badges create urgency to watch
3. **No Maintenance** - Fully automatic updates
4. **SEO Boost** - Fresh content helps rankings
5. **Mobile Optimized** - Works perfectly on all devices

### Current Videos in Feed (Examples)

1. **BOMBSHELL: Charlie Kirk WITNESS TAMPERING Evidence EXPOSED!!** - 2 hours ago
2. **Charlie Kirk ASSASSINATION Plot: NEW SUSPECTS & SHOCKING VIDEO!!** - 5 hours ago
3. **EPSTEIN FILES: Elite Names LEAKED - They're SCRAMBLING!!** - 8 hours ago
4. **Alex Jones TERRIFYING UPDATE on Epstein - ELITES PANIC!!** - 1 day ago
5. **Charlie Kirk Case BREAKS WIDE OPEN - FBI Whistleblower!!** - 1 day ago

### Implementation Priority

1. ✅ Visual design complete
2. ✅ NEW badge system ready
3. ⏳ YouTube API integration needed
4. ⏳ Auto-refresh mechanism needed
5. ⏳ Caching system needed

---

**Built by BUILDAI** - Making Jesse's content strategy legendary 🔥
