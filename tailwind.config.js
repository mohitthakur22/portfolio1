/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        border: 'var(--border)',
        border2: 'var(--border2)',
        text: 'var(--text-h)',
        muted: 'var(--text)',
        muted2: 'var(--text)',
        lime: '#a8ff78',
        cyan: '#56d4e8',
        orange: '#ff9a3e',
      },
      fontFamily: {
        sans: 'var(--sans)',
        mono: 'var(--mono)',
        display: 'var(--heading)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'typing-bar': 'typing-bar 0.7s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 8px rgba(168, 255, 120, 0.8)' },
          '50%': { opacity: '0.5', boxShadow: '0 0 4px rgba(168, 255, 120, 0.4)' },
        },
        'typing-bar': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
