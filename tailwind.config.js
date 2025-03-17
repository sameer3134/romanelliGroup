/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrolling: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        spinslow: "spin 10s linear infinite",
        "loop-scroll": "scrolling 10s linear infinite",
      },
      colors: {
        backgroundColor: '#140E0E', // Name the color anything you want
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
