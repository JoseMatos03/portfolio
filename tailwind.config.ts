import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#00e705',
        'background': '#1e1e1e',
        'primary': '#84f680',
        'secondary': '#0b944f',
        'accent': '#1bee9f',
      },
      fontFamily: {
        hack: ['Hack', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
