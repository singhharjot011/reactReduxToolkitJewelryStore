/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./*.{js,jsx,ts,tsx,css}"],
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
      xl: "2400px",
    },
    extend: {
      colors: {
        biege: "#f0eee5",
        babyPink: "#FAC2CC",
      },
    },
  },
  plugins: [],
};
