/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Rock Salt", "cursive"],
      },
      colors: {
        'white': '#ffffff',
        'orange': '#c79c5cff',
        'green': '#417968ff',
      },
    },
  },
  plugins: [],
}

