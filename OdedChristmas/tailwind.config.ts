import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Christmas pastel palette
        pastel: {
          green: '#E8F5E8',
          purple: '#F0E8F7', 
          pink: '#FDF2F8',
          cream: '#FFF8F0',
        },
        christmas: {
          green: '#2D5530',
          red: '#B91C1C',
          gold: '#F59E0B',
          silver: '#94A3B8',
        },
        accent: {
          warm: '#FEF3E2',
          cool: '#F0F9FF',
        }
      },
      fontFamily: {
        'cursive': ['var(--font-cursive)', 'Dancing Script', 'cursive'],
        'elegant': ['var(--font-elegant)', 'Playfair Display', 'serif'],
        'sans': ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      animation: {
        'gentle-float': 'gentleFloat 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};

export default config; 