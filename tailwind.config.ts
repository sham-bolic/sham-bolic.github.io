import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primarybg: "#49392C",
        secondarybg: "#2e241c",
        tertiarybg: "#453629",
        primarytext: "#f4ebd9",
        secondarytext: "#82bdae",
      },
    },
  },
  plugins: [],
} satisfies Config;
