import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
    },
    colors: {
      green: "#6AAA64",
      "light-grey": "#F3F3F3",
      yellow: "#CEB02C",
      "dark-grey": "#818181",
      white: "#ffffff",
    },
  },
  plugins: [],
} satisfies Config;
