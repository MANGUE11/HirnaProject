/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs HIRNA
        'hirna-orange': '#C76E1E',
        'hirna-dark': '#100F20',
        'hirna-purple': '#433F86',
        'hirna-green': '#31C247',
        'hirna-navy': '#191536',
        'hirna-gray': '#949494',
      },
      fontFamily: {
        'instrument': ['"Instrument Sans"', 'sans-serif'],
      },
      backgroundImage: {
        // Gradients HIRNA
        'gradient-lr': 'linear-gradient(to right, #100F20, #433F86)',
        'gradient-tb': 'linear-gradient(to bottom, #433F86, #100F20)',
        'gradient-navy-orange': 'linear-gradient(to bottom, #191536, #C76E1E)',
      },
    },
  },
  plugins: [],
}
