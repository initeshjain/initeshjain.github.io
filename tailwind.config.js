/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fefff3',
        warning: '#ffc107',
      },
      fontFamily: {
        'inclusive': ['Inclusive Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
