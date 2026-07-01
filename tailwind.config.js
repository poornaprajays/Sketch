/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pencil: '#2d2d2d',
        paper: '#fdfbf7',
        erased: '#e5e0d8',
        correction: '#ff4d4d',
        ballpoint: '#2d5da1',
      },
    },
  },
  plugins: [],
}
