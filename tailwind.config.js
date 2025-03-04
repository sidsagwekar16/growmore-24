/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        covered: ["Covered By Your Grace", "cursive"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        thin: 200,
        normal: 400,
        bold: 800,
      },
    },
  },
  plugins: [],
}
