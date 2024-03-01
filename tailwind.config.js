const { addDynamicIconSelectors } = require('@iconify/tailwind');

const text = "subtext0";
const code = "text";
const hr = "surface1"
const link = "blue";
const pre = "mantle"

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
    extend: {
      keyframes: {
        "text-shimmer": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-headings": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-lead": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-links": theme(`colors.${link}.DEFAULT`),
            "--tw-prose-bold": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-counters": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-bullets": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-hr": theme(`colors.${hr}.DEFAULT`),
            "--tw-prose-quotes": theme(`colors.${hr}.DEFAULT`),
            "--tw-prose-quote-borders": theme(`colors.${hr}.DEFAULT`),
            "--tw-prose-captions": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-code": theme(`colors.${code}.DEFAULT`),
            "--tw-prose-pre-code": theme(`colors.${code}.DEFAULT`),
            "--tw-prose-pre-bg": theme(`colors.${pre}.DEFAULT`),
            "--tw-prose-th-borders": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-td-borders": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-body": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-bullets": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-hr": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-quotes": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-quote-borders": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-captions": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme(`colors.${text}.DEFAULT`),
            "--tw-prose-invert-td-borders": theme(`colors.${text}.DEFAULT`),
          },
        },
      }),
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
    require('tailwind-scrollbar')({
      nocompatible: true,
    }),
    require('@tailwindcss/typography')
  ],
}
