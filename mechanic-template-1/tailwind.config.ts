import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      screens: {
        lg: "1150px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "rgb(31, 184, 72)",
      },
      backgroundImage: {
        "home-banner": 'url("/images/banners/home.jpg")',
        repair: 'url("/images/repair.jpg")', // Fixed the missing quote here
        background: "linear-gradient(180deg, #000000 60%, #ffffff 50%)",
      },
      fontFamily: {
        montserrat: ["var(--font-Montserrat)"],
        Hind: ["var(--font-Hind)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
