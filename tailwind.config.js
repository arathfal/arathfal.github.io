/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './views/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
