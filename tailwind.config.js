/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
       acme: ['Acme', 'sans-serif'],
    },
    colors: {
      'primary': '#DDD0C8',
      'secondary': '#323232'
    },
  },
  plugins: [],
}

