module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'rash-sans': ['Martel Sans', 'sans-serif'],
        'rash-serif': ['Zilla Slab', 'serif'],
        'rash-headline': ['Anton', 'sans-serif'],
      },
      colors: {
        'rash-black': '#0a0b0a',
        'rash-yellow': '#d4b11c',
        'rash-red': '#F20F2B',
        'rash-grey': '#292a29',
        'rash-dark-grey': '#202120',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
