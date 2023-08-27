/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'hover-blue': '#0C4DA2', // Define your custom color
      },
    },
    fontFamily: {
      'custom': ['ubuntu-mono', 'Ubuntu', 'sans-serif'],
  },
  },
  plugins: [],
}

