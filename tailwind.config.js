/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./layout/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")
  ],
}