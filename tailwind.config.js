// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index'],
  // content: [
  //   './src/**/*.{js,jsx,ts,tsx}', './pages/**/*/*.{js,jsx,ts,tsx}'
  // ],
  theme: {
    extend: {
    }
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
  ],
}
