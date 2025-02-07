/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "light-blue": "#62CEE1",
        "light-grey": "#D3D3D3",
        pink: "#b47dba",
        "pastel-yellow": "#dec47e",
        "pastel-blue": "#8bb9e0",
      },
      fontFamily: {
        aquire: ["Aquire"],
        sans: ["Geist"],
      },
    },
  },
  plugins: [],
};
