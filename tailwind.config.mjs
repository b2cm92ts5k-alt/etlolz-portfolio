/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f5ff',
          purple: '#bf00ff',
          green: '#00ff88',
          orange: '#ff6b00',
          pink: '#ff00aa',
        },
        dark: {
          900: '#05050f',
          800: '#0a0a1a',
          700: '#0f0f24',
          600: '#16162e',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { textShadow: '2px 0 #00f5ff, -2px 0 #bf00ff' },
          '25%': { textShadow: '-2px 0 #00f5ff, 2px 0 #bf00ff', transform: 'translateX(2px)' },
          '50%': { textShadow: '2px 0 #bf00ff, -2px 0 #00f5ff', transform: 'translateX(-2px)' },
          '75%': { textShadow: '-2px 0 #bf00ff, 2px 0 #00f5ff', transform: 'translateX(1px)' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '50%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
