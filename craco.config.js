module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('./tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
};