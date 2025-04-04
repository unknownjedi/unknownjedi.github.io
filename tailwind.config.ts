/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content files Tailwind should scan for classes
  content: [
    './index.html', // Include the main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS, TS, JSX, TSX files in the src directory
  ],
  // Theme customization (add custom colors, fonts, etc. here)
  theme: {
    extend: {
      // Example: Add custom font family
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'], // Assuming Inter font is loaded
      // },
      // Example: Add custom colors
      // colors: {
      //   'matrix-green': '#00FF41',
      //   'matrix-green-dark': '#008F11',
      // }
    },
  },
  // Tailwind CSS plugins (add any plugins like forms, typography here)
  plugins: [],
};
