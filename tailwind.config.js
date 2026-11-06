const theme = require("./src/styles/theme.json");

const fontFamily = Object.fromEntries(
  Object.entries(theme.fontFamily).map(([key, stack]) => {
    const name = stack[0];
    const variable = name.includes("Jakarta")
      ? "var(--font-jakarta)"
      : "var(--font-inter)";
    return [key, [variable, name, "sans-serif"]];
  }),
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      fontFamily,
      fontSize: theme.fontSize,
      screens: {
        xs: "400px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      backdropBlur: {
        xs: "4px",
      },
      scale: {
        98: "0.98",
      },
    },
  },
  plugins: [],
};
