const { nextui } = require('@nextui-org/theme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // single component styles
    // './node_modules/@nextui-org/theme/dist/components/button.js',
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|card|input|progress|tooltip|spinner).js'
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif']
      },
      colors: {
        my_blue: {
          dark: '#100E1D',
          smooth: '#1E213A',
          opaque: '#88869D',
          primary: '#3C47E9'

        },
        my_white: {
          light: '#E7E7EB',
          smoth: '#A09FB1'
        },
        my_yellow: '#FFEC65'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
