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
      keyframes: {
        moveInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-10rem)' },
          '80%': { transform: 'translateX(1rem)' },
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
        moveInRight: {
          '0%': { opacity: 0, transform: 'translateX(10rem)' },
          '80%': { transform: 'translateX(-1rem)' },
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
        moveInBottom: {
          '0%': { opacity: 0, transform: 'translateY(3rem)' },
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
      },
      animation: {
        'move-in-left': 'moveInLeft 1s ease-out',
        'move-in-right': 'moveInRight 1s ease-out',
        'move-in-bottom': 'moveInBottom .5s ease-out .75s backwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
