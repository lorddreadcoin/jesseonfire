# 🎨 Add Sponsor Logos Instructions

## Quick Steps to Add Your Logos:

### 1. Download the logos from Imgur:
Visit: https://imgur.com/a/LFduJSs

### 2. Save them to your project:
Save the images in: `C:\Users\user\Desktop\fire-hq\public\images\`

Name them:
- `prizepicks-logo.png` (PrizePicks logo)
- `yokratom-logo.png` (YoKratom logo)

### 3. That's it!
The site is already configured to use these logos. Once you add them, they'll automatically display.

---

## Alternative: Direct Image URLs

If you prefer, you can also update the Sponsors component to use direct URLs:

```javascript
// In components/Sponsors.tsx
logo: "https://i.imgur.com/[IMAGE_ID].png"
```

Replace [IMAGE_ID] with the actual image IDs from your Imgur album.

---

## Current Fallback

Right now the site shows styled fallback logos:
- PrizePicks: Green gradient with "PP"
- YoKratom: Amber/Orange gradient with "YK"
- Magic Mind: Purple/Blue gradient with "MM"

These look professional but the real logos will be even better!

---

**Note:** The site is configured to automatically hide the fallback and show the real logo once the image files are added.
