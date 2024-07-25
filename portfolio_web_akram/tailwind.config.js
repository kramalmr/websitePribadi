/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grayPM: "#1E1E1E",
        redPM: "#D04848"
      },
      fontFamily: {
        'ericaone': ["Erica One"],
        'dmsans': ["DM Sans"],
        'dmmono': ["DM Mono"],
      },
      spacing:{
        'containerHeight':"100%"
      }
    },
  },
  plugins: [],
}

