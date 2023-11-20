/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rfs'),
    require('tailwindcss-vite-plugin'),
    require('@catppuccin/tailwindcss')
  ],
  safelist: [{
    pattern: /(bg|text|border|fill)(-l-|-r-|-t-|-b-|-x-|y-|-)(rosewater|flamingo|pink|mauve|red|maroon|peach|yellow|green|teal|sky|sapphire|blue|lavender|text|base|mantle|crust)/
}]
}

