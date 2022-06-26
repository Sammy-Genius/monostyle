module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        tangerine: ['Tangerine', 'cursive'],
      },
      width: {
        '400': '400px',
        '200': '200px',
        '300': '300px',
        '170': '170px'
      },
      height: {
        '400': '400px',
        '500': '500px',
        '200': '200px',
        '300': '300px',
        '170': '170px'
      },
      colors: {
        'main': '#3d3d3d'
      }
    },
  },
  plugins: [],
}
