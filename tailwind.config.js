/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "#1C1C34",
        "custom-darker-blue": "#1F1F38",
        "custom-light-blue": "#45DBE2",
      },
      backgroundColor: {
        "custom-project-blue": "rgba(7, 121, 228, 0.85)",
      },
    },
  },
  plugins: [],
};
