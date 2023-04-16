/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    extend: {
      colors:{
        'ODS': {
          '50': '#f4f6fb',
          '100': '#e7edf7',
          '200': '#cad8ed',
          '300': '#9cb8dd',
          '400': '#6692ca',
          '500': '#4375b4',
          '600': '#325c97',
          '700': '#294a7b',
          '800': '#254067',
          '900': '#243856',
          '950': '#0c121d',
    
        },
        },
    },
  },
  plugins: [],
}