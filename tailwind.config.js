/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "light-blue": "#62CEE1", // Here is your color
      },
    },
  },
  plugins: [],
};
