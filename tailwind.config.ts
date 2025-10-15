import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Jesse ON FIRE - Cinematic Color Palette
        'fire-orange': '#FF5A1F',      // Primary Accent
        'lava-red': '#E23E1D',         // Secondary Accent
        'obsidian': '#0A0A0C',         // Dark Background
        'charcoal': '#16181D',         // Mid Dark
        'ash-grey': '#C4C7CC',         // Light Accent
        'molten-amber': '#FFB86C',     // Highlight Glow
        'electric-steel': '#007AFF',   // Success/Link Blue
        
        // Legacy colors (keep for compatibility)
        'fire-primary': '#FF5A1F',
        'fire-secondary': '#E23E1D',
        'dark-bg': '#0A0A0C',
        'dark-surface': '#16181D',
        'dark-border': '#2A2A2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#C4C7CC',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'Impact', 'sans-serif'],
        'heading': ['Anton', 'Oswald', 'sans-serif'],
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        'quote': ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'fire-gradient': 'linear-gradient(90deg, #E23E1D 0%, #FF5A1F 50%, #FFB86C 100%)',
        'ember-gradient': 'linear-gradient(180deg, #16181D 0%, #0A0A0C 100%)',
        'fire-radial': 'radial-gradient(circle at center, #FF5A1F 0%, #E23E1D 100%)',
      },
      boxShadow: {
        'fire-glow': '0 0 20px rgba(255, 90, 31, 0.4)',
        'fire-glow-lg': '0 0 30px rgba(255, 90, 31, 0.6)',
        'ember-glow': '0 0 15px rgba(226, 62, 29, 0.3)',
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'fire-flicker': 'fireFlicker 3s ease-in-out infinite',
        'ember-drift': 'emberDrift 8s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { 
            boxShadow: '0 0 10px rgba(255, 90, 31, 0.3)',
            textShadow: '0 0 10px rgba(255, 90, 31, 0.5)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(255, 90, 31, 0.6)',
            textShadow: '0 0 20px rgba(255, 90, 31, 0.8)'
          },
        },
        fireFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        emberDrift: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-10vh) translateX(20px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
