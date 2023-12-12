/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./layout/**/*.ejs"],
  variants: {
    extend: {}
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")
  ],
}