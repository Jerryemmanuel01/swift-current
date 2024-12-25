/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        primary: "#002f5b",
        secondary: "#012c57",
      },
      colors: {
        primary: "#002f5b",
        secondary: "#012c57",
        light: "#617e97",
        dark: "#012243",
        darker: "#00152a",
        yellow: "#fcd315",
      },
    },
  },
  plugins: [],
};
