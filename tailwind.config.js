/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        copperplate: ["Copperplate", "fantasy"],
        ubuntu: ["Ubuntu", "sans serif"],
      },
    },
  },
  plugins: [],
};
