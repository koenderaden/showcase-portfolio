/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        success: "#38c172",
        background: "#121212",
        "background-light": "#1a1a1a",
        "text-primary": "#ffffff",
        "text-secondary": "#a0aec0",
      },
    },
  },
  plugins: [],
};
