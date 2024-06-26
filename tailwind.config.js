/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      limeb: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#bef264",
        400: "#22d3ee",
        500: "#84cc16",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      // ...
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
