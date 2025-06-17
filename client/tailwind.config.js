/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#323232',
        accent: '#d25f1c',
        accent2: '#ed5620',
        dark: '#131313',
        gray1: '#b6b6b6',
        gray2: '#cecece',
        gray3: '#f3f3f3',
      },
    },
  },
  plugins: [],
}