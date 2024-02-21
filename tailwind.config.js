/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        DarkBlue: "#2b3945",
        "VeryDarkBlue-bg": "#202c37",
        VeryDarkBlue: "#111517",
        DarkGray: "#858585",
        VeryLightGray: "#fafafa",
        White: "#ffffff",
      },
      gridTemplateColumns: {
        two: "repeat(2, fit-content(320px))",
        three: "repeat(3, fit-content(320px))",
        four: "repeat(4, fit-content(320px))",
      },
    },
  },
  plugins: [],
};
