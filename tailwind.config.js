/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      },
      cursor: {
        'fancy': 'url(hand.cur), pointer',
      },
      fontFamily: {
        Macondo: ['Macondo', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        asian:['sd-asian-font-f93876','roboto']
      },
    },
  },
  plugins: [],
}

