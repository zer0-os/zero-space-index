const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["eurostile", ...defaultTheme.fontFamily.sans],
        special: ["eurostile-extended", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ["zero-purple"]: "#CD85FF"
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};