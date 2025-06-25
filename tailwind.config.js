module.exports = {
  content: [
     "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        sway: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-1deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        sway: 'sway 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
