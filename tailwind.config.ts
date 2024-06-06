import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-500": "#1a365d",
        "brand-600": "#153e75",
        "brand-700": "#1a365d",
        "brand-800": "#153e75",
        "brand-900": "#1a365d",
        "brand-1000": "#153e75",
        "small-grid-card": "#FAFAFA",
        "large-grid-card": "#FAFAFA",
        "uniswap-brand": "#F50DB4",
        "rainbow-brand": "#1E42C8",
        "binance-brand": "#F0B90B",
        "github-heatmap": "#6E6E6E",
        "calendar-card": "radial-gradient(220.03% 220.03% at 173.43% -46.86%, #5C5C5C 0%, #000 100%)",
        "github-card": "linear-gradient(180deg, #000 0%, #50555B 100%, #50555B 100%)",
      },
      backgroundImage: {
        "calendar-card": "radial-gradient(220.03% 220.03% at 173.43% -46.86%, #5C5C5C 0%, #000 100%)",
        'macbook-pattern': "url('/bg-mac.png')",
      },

    },
  },
  plugins: [],
};
export default config;
