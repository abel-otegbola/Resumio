import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#AA52DD",
        "secondary": "#999",
        "tetiary": "#333",
        "dark": "#282828",
      },
      boxShadow: {
        "input-active" : "0px 0px 12px 0px #633CFF40",
        "button": "4px 5px 15px 0px rgba(222, 222, 222, 0.10) inset"
      },
      animation: {
        "spin-slow": "spin 5s linear infinite"
      }
    },
  },
  plugins: [],
};

export default config;
