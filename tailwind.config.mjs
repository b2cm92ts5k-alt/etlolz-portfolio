/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          red: '#ff1a2e',
          crimson: '#b30011',
          cyan: '#00d4ff',
          green: '#00e577',
          orange: '#ff7700',
          purple: '#aa00ff',
        },
        dark: {
          950: '#050305',
          900: '#080508',
          800: '#0f090b',
          700: '#160d0f',
          600: '#1e1012',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'flicker': 'flicker 4s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 88%, 100%': { textShadow: '0 0 30px #ff1a2e60' },
          '89%': { textShadow: '3px 0 #ff1a2e, -3px 0 #7a0010', transform: 'translateX(2px)' },
          '91%': { textShadow: '-3px 0 #ff1a2e, 3px 0 #7a0010', transform: 'translateX(-2px)' },
          '93%': { textShadow: '2px 0 #7a0010, -2px 0 #ff1a2e', transform: 'translateX(1px)' },
          '95%': { textShadow: '0 0 30px #ff1a2e60', transform: 'translateX(0)' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '50%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.85' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.9' },
          '99%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
