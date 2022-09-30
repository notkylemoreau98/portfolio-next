/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ping: "animate-ping 0.5s ease-in-out 2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
