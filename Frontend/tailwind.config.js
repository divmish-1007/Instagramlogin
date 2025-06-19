/** @type {import('tailwindcss').Config} */
// @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instagram: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
};
