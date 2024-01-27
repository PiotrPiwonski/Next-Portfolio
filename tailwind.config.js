/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-home": "linear-gradient(62deg, #EEF7FB 0 50%, #A8AFDE 0% 100%)",
        "gradient-home-dark": "linear-gradient(62deg, #0D1120 0 50%, #A8AFDE 0% 100%)"        
      },
      colors: {
        night: {
          DEFAULT: "#0D1120",
          50: "#171E2C",
          500: "#0D1120"
        }
      },
    },
  },
  plugins: [],
};
