/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}

