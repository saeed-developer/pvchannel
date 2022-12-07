/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        error: '#FF0000',
        white: '#FFFFFF',
        black: '#151515',
        online: '#92ED4B',
        red: '#FF4040',
        primary: {
          100: '#C5C8ED',
          200: '#8A90DA',
          300: '#B1B5E7',
          400: '#242A74',
          500: '#12153A',
          600: '#636BCE',
        },
        secondary: {
          100: '#EDEDED',
          200: '#CDCDCD',
          300: '#939393',
          400: '#585858',
        },
      },
    },
  },
  plugins: [],
};
