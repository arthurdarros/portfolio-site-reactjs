/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter',
      },
      colors:{
        'orange-skin': '#BF7E6F'
      },
    },
  },
  plugins: [],
}