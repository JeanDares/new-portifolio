/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#4a4a4a',
        'gray-medium': '#7d7d7d',
        'gray-light': '#f2f2f2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Lora"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
