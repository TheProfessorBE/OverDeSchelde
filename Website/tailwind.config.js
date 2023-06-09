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
        'ODS2': {
          '50': '#f5f6fa',
          '100': '#ebedf3',
          '200': '#d2d8e5',
          '300': '#aab5cf',
          '400': '#7c8db4',
          '500': '#5e72a1',
          '600': '#475782',
          '700': '#3b4769',
          '800': '#333d59',
          '900': '#2e354c',
          '950': '#1f2332',
      },
        },
    },
  },
  plugins: [],
}