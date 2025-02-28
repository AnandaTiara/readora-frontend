/** @type {import{'tailwindcss'}.Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("./tailwind.js")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf1ed",
          100: "#c7d5c7",
          200: "#acc0ab",
          300: "#86a485",
          400: "#6e926d",
          500: "#4a7749",
          600: "#436c42",
          700: "#355434",
          800: "#294128",
          900: "#1f321f",
        },

        neutral: {
          50: "#fffffc",
          100: "#fefff5",
          200: "#fefff0",
          300: "#feffea",
          400: "#fdffe5",
          500: "#fdffdf",
          600: "#e6e8cb",
          700: "#b4b59e",
          800: "#8b8c7b",
          900: "#6a6b5e",
        },

        accent: {
          50: "#fcefe8",
          100: "#f4ceb9",
          200: "#efb697",
          300: "#e89568",
          400: "#e3814a",
          500: "#dc611d",
          600: "#c8581a",
          700: "#9c4515",
          800: "#793510",
          900: "#5c290c",
        },
      },

      fontFamily: {
        wulkan: ["Wulkan Display", "sans-serif"],
        aileron: ["Aileron", "sans-serif"],
      },
    },
  },
};
