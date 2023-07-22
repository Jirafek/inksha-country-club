/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ecd23b',
      },
      container: {
        center: true,
        padding: '1.25rem',
      },
      screens: {
        '3xl': '2500px',
        'vsm': '355px',
        '370p': '370px'
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, -20px)' },
        }
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      );
    },
  ],
};
