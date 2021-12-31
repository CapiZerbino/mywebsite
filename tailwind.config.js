module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      dropShadow: {
        '3xl' : '10px 10px 19px #1c1e22,-10px -10px 19px #262a2e',
      }
    },
  },
  plugins: [],
}
