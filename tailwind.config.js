module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'c-black': '#0B0C10',
        'c-darkgray': '#1F2833',
        'c-gray': '#C5C6C7',
        'c-electricblue': '#66FCF1',
        'c-teal': '#45A29E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
