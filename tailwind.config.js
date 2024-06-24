/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0 5px 10px 0 rgba(0, 0, 0, 0.5)",
      },
      letterSpacing: {
        normal: "-1px",
      },
      width: {
        300: "18.75rem",
      },
      height: {
        18: "4.5rem", // 72px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "50ch": "50ch",
      },
    },
  },
  plugins: [],
};
