import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '970px',
        'xl': '1024px',
        '2xl': '1024px',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  important: true
};
export default config;
