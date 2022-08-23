module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: '#00CB92',
        primary: '#121212',
        secondary: '#1D1D1D',
        darkness: '#141C10',
        drop: '#F7F7F7'
      },
      fontSize: {
        'xxs': '.55rem'
      },
      boxShadow: {
        'custom': '0 -3px 0 0 1px rgba(0, 0, 0, .25)'
      }
    },
  },
  plugins: [],
}
