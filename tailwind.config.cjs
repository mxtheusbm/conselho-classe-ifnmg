/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave-haikei': "url('../assets/wave-haikei.png')",

      }
    },
  },
  plugins: [],
}