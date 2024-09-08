/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundtheme: '#EFF5F3',
        themelight: '#264B3A',
        themedark: '#264B3A'
      }
    },
  },
  plugins: [],
}