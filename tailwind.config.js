module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'rash-yellow': '#d4b11c',
        'rash-red': '#ff0e00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
