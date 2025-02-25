/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        20: "20px",
      },
      fontFamily: {
        catchy: ['"Catchy Mager"', 'sans-serif'],
        coco: ['"Coco Gothic"', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBeige: "#f4f1ed",
        customBeige2: "#EBE1D2",
        customBrown: "#b07b69",
        customDarkBrown: "#8B4513",
      },
    },
  },
  plugins: [],
};
