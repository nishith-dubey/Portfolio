// tailwind.config.js
module.exports = {
  darkMode: 'class', // IMPORTANT for class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // adjust this to match your structure
  theme: {
    extend: {
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle, rgba(29,78,216,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
}
