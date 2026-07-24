import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        ivory: {
          50: '#fffdf8',
          100: '#fdf7ef',
          200: '#f6ead6',
          300: '#ecd6b2',
          400: '#d9b77d',
          500: '#c49a57',
          600: '#a97c3d',
        },
        rosegold: '#d7a7a0',
        blush: '#f8e5df',
        cocoa: '#5c463c',
      },
      boxShadow: {
        glow: '0 18px 60px rgba(183, 137, 97, 0.22)',
        soft: '0 24px 80px rgba(103, 72, 51, 0.12)',
      },
      backgroundImage: {
        'romantic-radial': 'radial-gradient(circle at top, rgba(255, 255, 255, 0.92), rgba(250, 235, 219, 0.88) 45%, rgba(242, 216, 188, 0.72) 100%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        slowPulse: {
          '0%, 100%': { opacity: '0.72' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        slowPulse: 'slowPulse 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
