/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#efebf2',
        customGrey: '#d1cfd3',
        customPurple: '#30105a',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}