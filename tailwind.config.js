/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      fontSize: {
         ultra: "clamp(48px, 10vw, 128px)",
         tarif: "clamp(6px, 5vw, 24px)",
         xl: "clamp(30px, 5vw, 70px)",
         lg: "clamp(12px, 5vw, 48px)",
         "36px": "clamp(11px, 4vw, 36px)",
         md: "clamp(10px, 4vw, 28px)",
         extramd: "clamp(10px, 3vw, 28px)",

         sm: "clamp(9px, 3vw, 18px)",
         small: "clamp(6px, 3vw, 18px)",
      },
      extend: {
         colors: {
            primary: "#ecd23b",
            violet: "#412E52",
            darkViolet: "#22182B",
            grey: "#C5C3C3",
            brown: "#AB8E67",
            pumpkin: "#FF7A00",
            yellow: "#FFEC44",
            korpHeader: "#25200C",
            korpPrimary: "#201E1F",
         },
         container: {
            center: true,
            padding: "1.25rem",
         },
         screens: {
            "3xl": "2500px",
            vsm: "355px",
            "370p": "370px",
         },
         keyframes: {
            jump: {
               "0%, 100%": { transform: "translate(0, 0)" },
               "50%": { transform: "translate(0, -20px)" },
            },
         },
      },
   },
   plugins: [
      function ({ addVariant }) {
         addVariant(
            "supports-backdrop-blur",
            "@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"
         );
      },
   ],
};
