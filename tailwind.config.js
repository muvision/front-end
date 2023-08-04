/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'theme':'#7C7EAE',
      'theme-stroke':"#5D5F88"
    },
    fontFamily: {
      'sans': ['Chakra Petch', 'sans-serif'],
      'serif': ['Roboto Slab', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

