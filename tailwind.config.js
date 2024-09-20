module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        navy: '#001f3f',  // Custom navy color for JL logo
        lightGray: '#EDEDED',  // Light gray for light mode
        darkGray: '#0A0A0A',  // Dark gray for dark mode
        gradientLight: '#C0C0C0', // Gradient color for light mode
        gradientDark: '#1A1A1A', // Gradient color for dark mode
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(135deg, #EDEDED, #C0C0C0)',  // Light mode gradient
        'dark-gradient': 'linear-gradient(135deg, #0A0A0A, #1A1A1A)',   // Dark mode gradient
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
