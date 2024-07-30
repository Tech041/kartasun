import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        "primary-500": "#800080",
        "primary-400": "#A151F1",
        "primary-300": "#782F78",
        "primary-200": "#ECD9F2",
        "accent-500": "#FDBA74",
        "accent-400": "#F6BC7D",
        "accent-300": "#FB923C",
        "extra-900": "#F15541",
        "extra-800": "#FEC241",
        "extra-700": "#30323B",
        "extra-600": "#19A4AD",
        "extra-500": "#FFF7EC",
        "extra-400": "#E02B20",
        "extra-300": "#000000",
        "extra-200": "#666666",
        fblack: "#1C1E21",
        fblue: "#0866FF",
        fplace: "#FFFFFF",
        fbgreen: "#42B72A",
      },
      backgroundImage: {
        hero: "url(/images/inverterHero1.jpg)",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};
export default config;
