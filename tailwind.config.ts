import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        none: {
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none', /* IE/Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primarybg: "#49392C",
        secondarybg: "#2e241c",
        tertiarybg: "#453629",
        primarytext: "#f4ebd9",
        secondarytext: "#82bdae",
      },
      keyframes: {
        blink: {
          '0%, 100%': { visibility: 'visible' },
          '50%': { visibility: 'hidden' },
        },
      },
      animation: {
        blink: "blink 1s steps(1, start) infinite",
      },
      borderRadius: {
        'half': '8rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
