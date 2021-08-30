const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        special: ["ddt_cd_bk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ["zero-purple"]: "#CD85FF",
        ["zero-purple-light"]: "#DEAFFF",
        ["zero-bg"]: "rgb(45, 0, 77)",
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