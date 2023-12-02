import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#f3f8fc",
          "100": "#e5f0f9",
          "200": "#c5e1f2",
          "300": "#92c9e7",
          "400": "#6eb8dd",
          "500": "#3393c4",
          "600": "#2376a6",
          "700": "#1d5e87",
          "800": "#1c5170",
          "900": "#1c445e",
          "950": "#132c3e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
