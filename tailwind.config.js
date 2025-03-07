/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-white': 'hsl(0, 0%, 100%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'dark-blue': ' hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)' ,
        'custom-orange':  'hsl(25, 97%, 53%)'
      }
    },
  },
  plugins: [],
}