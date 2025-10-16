# OT Council Font Files

This directory needs the OT Council font files for Jesse's site.

## Required Files:

Place the following OT Council font files in this directory:

- `OTCouncil-Regular.woff2` (priority)
- `OTCouncil-Regular.woff` (fallback)
- `OTCouncil-Bold.woff2` (priority)
- `OTCouncil-Bold.woff` (fallback)
- `OTCouncil-Italic.woff2` (optional)
- `OTCouncil-Italic.woff` (optional)
- `OTCouncil-BoldItalic.woff2` (optional)
- `OTCouncil-BoldItalic.woff` (optional)

## Notes:

- .woff2 format is preferred for modern browsers (better compression)
- .woff format is the fallback for older browsers
- Bold and Regular weights are required
- Italic styles are optional but included in the configuration

## Where OT Council is Used:

All prominent, eye-catching text throughout the site:
- Hero titles and taglines
- Section headings (H1, H2, H3)
- CTA buttons
- Video section titles
- Channel names
- Sponsor titles
- Any text using `font-display`, `font-heading`, or `font-council` classes

## After Adding Fonts:

1. Place the font files in this directory
2. No code changes needed - fonts are already configured
3. Clear browser cache to see changes
4. Deploy to Vercel for live site update
