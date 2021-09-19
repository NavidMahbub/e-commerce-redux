module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'banner-pattern' : "url('/src/images/banner.jpg')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
