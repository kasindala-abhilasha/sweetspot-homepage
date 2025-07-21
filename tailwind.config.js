/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        parastoo: ["Parastoo", "cursive"],
      },
      colors: {
        primary: "rgba(224, 99, 99, 0.85)",
        darkCard: "#1f1f1f",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
