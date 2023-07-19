/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#e8eddf',
        'gray': '#333533',
        'gray-light': '#cfdbd5',
        'yellow': '#f5cb5c',
        'dark': '#242423',
      }
    },
  },
  plugins: [],
}

