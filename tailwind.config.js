/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        chalk: "#FBFAF6",
        sand: "#E4E0D3",
        pine: "#0E3B2C",
        turf: "#1F6F52",
        seam: "#C4362C",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        body: ["'Source Serif 4'", "Georgia", "serif"],
      },
      maxWidth: {
        readable: "68ch",
      },
    },
  },
  plugins: [],
};
