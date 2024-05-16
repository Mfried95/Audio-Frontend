module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'nav-hover': '#D87D4A',  // Ensure this is correctly defined
        'home-hover': '#FBAF85'
      },
    },
  },
  plugins: [],
}

