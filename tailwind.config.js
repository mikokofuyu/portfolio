const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    screens: {
      xxs: '320px',
      xs: '375px',
      'horizontal-xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'dark-purple': '#361D2E',
        'light-purple': '#543e4c',
        'khaki-web': '#CBC0AD',
        'morning-blue': '#86A397',
      },
      fontFamily: {
        header: ['Josefin Sans', 'sans-serif'],
        body: ['Titillium Web', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
