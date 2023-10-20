/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      backgroundImage: {
        circleStar: 'url(/images/svgs/circle-star.svg)',
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,4) 2px,#f5f5f5 5px,#f5f5f5 100px);'
      },
      colors: {
        dark: '#1b1b1b',
        luxury:'#ae6d50',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      }
    },
  },
  plugins: [],
}