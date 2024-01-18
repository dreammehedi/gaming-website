/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [],
}
