/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 Esto es esencial
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#1e293b", // gris azulado oscuro
        darkText: "#f8fafc", // casi blanco
      },
    },
  },
  plugins: [],
};
