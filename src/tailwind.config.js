module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinCustom: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinCustom: 'spinCustom 1s linear infinite',
      },
    },
  },
  plugins: [],
};
