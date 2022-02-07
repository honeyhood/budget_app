module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      prefix: "tw-",
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["corporate"],
  },
};
