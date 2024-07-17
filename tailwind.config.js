/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.\\public\\index.html',
  ],
  theme: {
    extend: {
      letterSpacing: {
        jarak: '.5em',
        sempit: '-0.5em'
      }
    },
  },
  plugins: [],
}

