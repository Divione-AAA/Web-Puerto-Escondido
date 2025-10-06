/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // 👈 nuevo plugin
    autoprefixer: {},
  },
};
