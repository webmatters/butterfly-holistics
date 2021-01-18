const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['PlayFair Display'],
      },
      colors: {
        primary: {
          lightest: '#bdd6e8',
          light: '#229bd0',
          DEFAULT: '#008fcb',
          dark: '#026392',
        },
        secondary: {
          light: '#a89cc1',
          DEFAULT: '#7a5e98',
        },
        tertiary: {
          light: '#f2e3ad',
          DEFAULT: '#fcd34d',
        },
      },
      backgroundImage: theme => ({
        'butterfly-hero':
          "url('https://images.unsplash.com/photo-1557912407-eb2900cf49e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
