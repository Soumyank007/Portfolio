/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 1px,#ffffff 8px,#ffffff 100px);',
        circularDark:  'repeating-radial-gradient(rgba(255,255,255,0.5) 1px,#1b1b1b 8px,#1b1b1b 100px);'
      },
      colors: {
        dark: '#1b1b1b',
        luxury: '#ae6d50',
        light: '#f5f5f5',
        primary: 'red', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      }
    },
  },
  plugins: [],
}