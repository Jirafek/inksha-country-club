/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ultra: "clamp(48px, 10vw, 128px)",
      tarif: "clamp(6px, 4vw, 24px)",
      xl: "clamp(40px, 10vw, 80px)",
      lg: "clamp(3px, 3vw, 32px)",
      md: "clamp(10px, 4vw, 28px)",
      sm: "clamp(10px, 8vw, 18px)",
      small: "clamp(6px, 4vw, 18px)",
    },
    extend: {
      colors: {
        primary: '#ecd23b',
        violet: "#412E52",
        darkViolet: "#22182B",
        grey: "#C5C3C3",
        pumpkin: "#FF7A00",
        yellow: "#FFEC44",
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
