/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fintrack-bg': '#efeefc',
        'fintrack-purple': '#8477e4',
        'fintrack-pink-light': '#feeefd',
        'fintrack-pink-dark': '#e584ee',
      }
    },
  },
  plugins: [],
}