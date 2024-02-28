/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
=======
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
>>>>>>> e6b469ccd22af161d979a8c52ccfe9872a496846
  ],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [],
=======
  plugins: [require('@tailwindcss/forms')],
>>>>>>> e6b469ccd22af161d979a8c52ccfe9872a496846
}