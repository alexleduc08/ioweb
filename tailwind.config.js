/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'io-accent': '#FFE609',
        'io-dark': '#1E1E1E',
        'io-light': '#F5FCFA'
      }
    }
  },
  plugins: []
}
