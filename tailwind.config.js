/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fjallaOne: ["Fjalla One", "sans serif"],
        ubuntu: ["Ubuntu", "sans serif"],
        rubrik: ['Rubik Distressed', "cursive"],
      },
    },
  },
  plugins: [],
};
