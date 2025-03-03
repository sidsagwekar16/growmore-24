/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        CoveredByYourGrace : ["Covered By Your Grace", "cursive"]
      },
      fontWeight:{
        normal:400
      }
    },
  },
  plugins: [],
}

