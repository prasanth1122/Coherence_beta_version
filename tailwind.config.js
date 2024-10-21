/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#305050",
        secondary: "#FF55B",
        terinary: "#EDC9AF",
        important_text: "002147",
        highlight_background: "F4F4F9",
      },
      width: {
        sidebar: "32rem", // Custom width (e.g., 512px),
      },
      height: {
        navbar: "60px",
      },
    },
  },
  plugins: [],
};
