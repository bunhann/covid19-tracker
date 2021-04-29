const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': [ ...defaultTheme.fontFamily.sans],
        'serif': [...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono]
      },
    },
    container: {
      center: true,
      padding: '2rem'
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: []
}
