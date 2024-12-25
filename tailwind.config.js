/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: "Manrope",
        Lilita: "Lilita One",
        Poppins: "Poppins",
      },
      boxShadow: {
        buttonShadow: "1px 1px 10px black",
        cardShadow: "1px 1px 10px slategray",
      },
    },
  },
  plugins: [],
};
