/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        card: 'var(--card)',
        glow: 'var(--glow)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        text: 'var(--text)',
        heading: 'var(--heading)',
      },
      boxShadow: {
        glow: '0 0 50px rgba(0, 209, 255, 0.45)',
        inset: 'inset 0 0 80px rgba(0, 209, 255, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Consolas', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dance: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(-3deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(-8px) rotate(3deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(20px,-10px) scale(1.1)' },
          '66%': { transform: 'translate(-15px,10px) scale(0.9)' },
          '100%': { transform: 'translate(0,0) scale(1)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        dance: 'dance 3.2s ease-in-out infinite',
        blob: 'blob 9s ease-in-out infinite',
        spinSlow: 'spinSlow 16s linear infinite',
      },
    },
  },
  plugins: [],
}
