/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        char: {
          950: '#070605',
          900: '#0c0a09',
          800: '#161311',
          700: '#221d1a',
        },
        ember: {
          400: '#ff8a3d',
          500: '#f9722f',
          600: '#e0511c',
          700: '#b93a15',
        },
        flame: {
          400: '#ef4444',
          500: '#d81e28',
          600: '#b3141d',
          700: '#8a0f17',
        },
      },
      backgroundImage: {
        'fire-gradient': 'linear-gradient(135deg, #d81e28 0%, #e0511c 50%, #ff8a3d 100%)',
      },
    },
  },
  plugins: [],
}
