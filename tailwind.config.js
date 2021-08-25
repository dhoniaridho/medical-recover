module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}',
  './src/views/*.{js,jsx,ts,tsx}',
  './src/views/*.{js,jsx,ts,tsx}',
  './src/components/**/*.{js,jsx,ts,tsx}', 
  './public/index.html'
],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
