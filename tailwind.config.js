/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBG: "#FFFFEB",
        greenMain: "#C4EFDB",
      },
      fontFamily: {
        head: ["DM Serif Display", "sans-serif"],
        body: ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};
