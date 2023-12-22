const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./layout/**/*.ejs"
  ],
  safelist: [
    "frappe",
    "macchiato",
    "mocha",
    "icon-\[charm--github\]",
    "icon-\[charm--sun\]",
    "icon-\[charm--moon\]",
    "icon-\[charm--notes\]",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(),
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    })
  ],
}