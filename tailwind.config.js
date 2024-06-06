/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      fontSize: {
         "3xl": "clamp(60px, 20vw, 100px)",
         "2xl": "clamp(32px, 5vw, 96px)",
         ultra: "clamp(48px, 10vw, 128px)",
         tarif: "clamp(6px, 5vw, 24px)",
         xl: "clamp(25px, 4vw, 70px)",
         lg: "clamp(12px, 5vw, 48px)",
         "36px": "clamp(18px, 4vw, 36px)",
         "32px": "clamp(21px, 4vw, 32px)",
         "md+": "clamp(17px, 4vw, 34px)",
         md: "clamp(10px, 4vw, 28px)",
         extramd: "clamp(10px, 3vw, 28px)",
         "24px": "clamp(9px, 4vw, 24px)",
         "20px": "clamp(16px, 4vw, 20px)",
         "md-": "clamp(6px, 4vw, 18px)",
         sm: "clamp(9px, 3vw, 18px)",
         small: "clamp(6px, 3vw, 18px)",
         "17px": "clamp(13px, 4vw, 17px)",
         "14px": "clamp(12px, 4vw, 14px)",
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
            NYblack: "#002106",
            NYgreen: "#009848",
            NYcream: "#E7C296",
            NYbrown: "#BC8E4A",
            NYred: "#EF004B",
            NYheader: "#041106",
            FBlack: '#081130',
            ChillBrown: '#593723',
            ValenPurple: '#79072C',
            ManBrown: '#502500',
            ManGreen: '#002500',
            MartPurple: '#674270',
            MartPink: '#D5B1DD',
            ButterOrange: '#FCA40C',
            ButterDarkBlue: '#153B73',
            ButterLightBlue: '#6977A4',
            BirthPurple: '#8348AB',
            BirthLightPurple: '#BC8DDC',
            BirthDarkPurple: '#38194D',
            MajOrange: '#E7A96A',
            MajGreen: "#55BD9B",
            MajRed: "#DF3F8A",
            GradPurple: "#2E1A44",
            GradCyan: "#019AB0",
            RusDarkBlue: "#0B1E42",
            RusLigthBlue: "#2A5691",
            RusDarkRed: "#A00000",
            HousingGreen: "#95BC6F"

         },
         container: {
            center: true,
            padding: "1.25rem",
         },
         screens: {
            "3xl": "2500px",
            vsm: "355px",
            '900p': '900px',
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
         )
      },
   ],
}
