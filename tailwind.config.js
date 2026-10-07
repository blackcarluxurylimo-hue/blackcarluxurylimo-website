/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      height: {
        '56': '23rem',
      },
      colors: {
        charcoal: '#0e0e0f',
        ink: '#161618',
        gold: '#C9A14A',
        goldSoft: '#E7C97C',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(201, 161, 74, 0.25), 0 10px 40px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'luxury-gradient':
          'radial-gradient(circle at 10% 0%, rgba(201,161,74,0.2), transparent 40%), linear-gradient(180deg, #0b0b0c 0%, #111113 50%, #0b0b0c 100%)',
      },
      keyframes: {
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 700ms ease forwards',
      },
    },
  },
  plugins: [],
};
