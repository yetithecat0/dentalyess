/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        morado: {
          DEFAULT: "#6B3FA0",
          light: "#8B5CC8",
        },
        lavanda: "#E8DEFF",
        verde: {
          salvia: "#7BAE7F",
          menta: "#4CAF85",
          oscuro: "#0F6E56",
        },
        amarillo: "#F0A500",
        crema: "#F9F7F4",
        "gris-oscuro": "#2D2D3A",
        "gris-medio": "#6B6B7B",
      },
    },
  },
  plugins: [],
};
