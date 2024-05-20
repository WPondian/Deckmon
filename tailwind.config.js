/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: {
          1: "#484848",
          2: "#006465",
          3: "#0f928c",
          4: "#4b9e3b",
          5: "#beee3b",
        },
        customRed: {
          1: "#b7aea5",
          2: "#433d3d",
          3: "#221d21",
          4: "#f77014",
          5: "#e33c08",
        },
        customBlue: {
          1: "#343838",
          2: "#005f6b",
          3: "#008c9e",
          4: "#00b4cc",
          5: "#00dffc",
        },
        customSystem: {
          1: "#29221f",
          2: "#606d80",
          3: "#13747d",
          4: "#ffee4a",
          5: "#fc354c",
        },
      },
    },
  },
  plugins: [],
};
