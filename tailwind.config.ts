import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
