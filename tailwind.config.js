/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include the app folder
    './pages/**/*.{js,ts,jsx,tsx}',  // If you have a pages folder
    './components/**/*.{js,ts,jsx,tsx}', // If you have a components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
