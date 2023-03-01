/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      },
    },
  },
  plugins: [],
};
