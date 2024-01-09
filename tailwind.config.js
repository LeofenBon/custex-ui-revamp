/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryDark: "#121212",
        mutedDark: "rgba(255, 255, 255, 0.08)",
        mutedDarkFont: "rgba(255, 255, 255, 0.5)",
        primaryLight: "white",
        // secondaryColor: "",
        // accentColor: ""
      },
    },
  },
  plugins: [require("rippleui")],
  darkMode: "class",
  rippleui: {
    defaultStyle: false,
  },
};
