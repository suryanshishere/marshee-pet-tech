/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx,mdx,css,scss,sass,less}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff6e6",
          100: "#ffe3b0",
          200: "#ffd68a",
          300: "#ffc354",
          400: "#ffb733",
          500: "#ffa500",
          600: "#e89600",
          700: "#b57500",
          800: "#8c5b00",
          900: "#6b4500",
        },
        accent: {
          100: "#ffe3b0",
          200: "#ffd68a",
          300: "#ffc354",
          400: "#ffb733",
          500: "#ffa500",
          600: "#e89600",
          700: "#b57500",
          800: "#8c5b00",
          900: "#6b4500",
        },
      },
    },
  },
};
