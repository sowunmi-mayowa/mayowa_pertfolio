/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        bgone: "#b3ffab",
        bgtwo: "#12fff7"
      },
      backgroundImage:{
        // bgpattern: "url('/assets/topography.svg')"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
