/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        primary: "Nunito Sans"
      }
    },
    colors: {
      /**This object contains all the color themes I will be using for this project */
      "dark-elements": "hsl(209, 23%, 22%)",
      "dark-bg": "hsl(207, 26%, 17%)",
      "light-text": "hsl(200, 15%, 8%)",
      "light-bg": "hsl(0, 0%, 98%)",
      "white": "hsl(0, 0%, 100%)",
      "transparent": "transparent",
      "dark-text": "hsl(0, 0%, 52%)"
    }
  },
  plugins: [],
}