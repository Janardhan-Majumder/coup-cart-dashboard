/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F8D84",
        playground: "#EEF8EF"
      },
    },
  },
  plugins: [],
};
