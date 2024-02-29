/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--playfair-display)"],
        jost: ["var(--jost)"],
      },

      colors: {
        "primary-500": "#3E54EB",
        "grey-500": "#A4A6AC",
      },

      textColor: {
        primary: "rgba(15, 16, 21, 1)",
      },
    },
  },
  plugins: [],
};
