/** @type {import('tailwindcss').Config}  */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        primary: "#5e7eff",
        secondary: "#4363e8",

        paper: "#ffffff",
        default: "#eeeeee",
        textPrimary: "#090e34",
        textSecondary: "#959cb1",

        paperDark: "#0e1526",
        defaultDark: "#080d1a",
        textDarkPrimary: "#e6ecff",
        textDarkSecondary: "#d7d9de"
      },
      boxShadow: {
        normal: "0px 0px 25px -10px rgba(0,0,0,0.175);"
      }
    }
  },
  plugins: []
};
