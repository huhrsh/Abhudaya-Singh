/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      scale:{
        '60':'0.6',
        '65':'0.65',
      },
      aspectRatio: {
        '4/3': '8/6',
      },
    },
  },
  plugins: [],
}
