/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "contacts.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "dark", "emerald"],
  },
}