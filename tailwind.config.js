/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-200': '#b1f8e2',
        'primary-300': '#4dc7a2',
        'primary-500': '#038767',
      },
    },
  },
  plugins: [],
};
