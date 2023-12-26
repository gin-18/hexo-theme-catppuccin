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
    "md\:hidden",
    "md\:inline-block",
    "icon-\[charm--sun\]",
    "icon-\[charm--moon\]",
    "icon-\[charm--notes\]",
    "icon-\[charm--github\]",
    "icon-\[charm--search\]",
    "icon-\[charm--arrow-up\]",
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