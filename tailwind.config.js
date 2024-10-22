/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        patrick: ["Patrick Hand", "cursive"], // Add cursive as a fallback
      },
      colors: {
        primary: "#305050",
        secondary: "#FF5E5B",
        terinary: "#EDC9AF",
        important_text: "#002147",
        highlight_background: "#F4F4F9",
      },
      width: {
        sidebar: "32rem", // Custom width (e.g., 512px),
      },
      height: {
        navbar: "4rem",
      },
      boxShadow: {
        input_shadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)", // Custom inner shadow
        cta_button_shadow: "0px 4px 4px rgba(0, 0, 0, 0.15)", //button shadow
        text_area_shadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
        card_shadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
