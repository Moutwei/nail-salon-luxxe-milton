/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundtheme: '#959488',
        themelight: '#6a8e7c',
        themedark: '#577564'
      }
    },
  },
  plugins: [],
}