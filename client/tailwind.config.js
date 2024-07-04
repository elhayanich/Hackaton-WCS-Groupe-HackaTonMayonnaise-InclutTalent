/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#131213",
        Purplee: "#513FC2",
        Purwhite: "#FFFFFF",
        Lightblue: "#D9DEFA",
        Greyy: "#F2F1F3",
      },
    },
  },
  plugins: [],
};
