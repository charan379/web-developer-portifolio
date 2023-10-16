/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "A4-Portrait": "1/1.41",
      },
      fontFamily: {
        roboto300: ["var(--font-robot-300)"],
        roboto400: ["var(--font-robot-400)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
