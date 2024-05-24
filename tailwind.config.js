/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0B85FF',
        accent: '#87BCFF',
        'dark-gray': '#404040',
        secondary: '#FFE738',
      },
      fontFamily: {
        IBM: ['IBM Plex Sans Thai', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
