/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        default: '15px',
      }
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1330px'
    },
    extend: {
      colors:{
        primary: '#005696',
        secondary: '#cccccc',
        tertiary: '#C07248',
        accent: {
          default: '#29323c',
          secondary: '#333333',
          tertiary: '#444444',
        },
        grey : '#333333',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        primary: '0px 0px 10px rgba(0, 86, 150, 0.2)',
        secondary: '0px 0px 10px rgba(0, 86, 150, 0.2)',
      },
      backgroundImage: {
        'services': "url('/images/hero.png')",
      }
    },
  },
  plugins: [],
}