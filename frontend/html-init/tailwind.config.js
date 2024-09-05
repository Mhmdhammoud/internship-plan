/** @type {import('tailwindcss').Config} */
let colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
colors = { ...colors, ...{ transparent: 'transparent' } };

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  safelist: [
    'columns-1',
    'columns-2',
    'columns-3',
    'columns-4',
    'columns-5',
    'columns-6',
    'columns-7',
    'columns-8',
    'columns-9',
    'columns-10',
    'columns-11',
    'columns-12',
    'grid',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
    'grid-cols-11',
    'grid-cols-12',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
      },
    },
    colors: {
      ...colors,
      primary: {
        10: '#f7f3e6',
        50: '#fae3a2',
        70: '#ffcd40',
        100: '#f59e0b',
        200: '#d97706',
      },

      bronze: {
        100: '#CD7F32',
      },
      silver: {
        100: '#808080',
      },
      gold: {
        100: '#d4af37',
      },
      platinium: {
        100: '#e5e4e2',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
