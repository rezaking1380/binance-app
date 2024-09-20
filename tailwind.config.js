/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#f0b90b",
        second : "#272c34",
        background : "#181a20",
      },
    },
  },
  plugins: [],
}