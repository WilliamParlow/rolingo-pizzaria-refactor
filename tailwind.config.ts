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
        "face-flushed": "url('/svg/face-flushed.svg')",
        "plus-white": "url('/svg/plus-white.svg')"
      },
    },
  },
  plugins: [],
};
export default config;
