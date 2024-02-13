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
        "gradient-home-dark": "linear-gradient(62deg, #0D1120 0 50%, #A8AFDE 0% 100%)",
        "gradient-portfolio": "linear-gradient(-62deg, #EEF7FB 0 45%, white 0% 100%)",
        "gradient-portfolio-dark": "linear-gradient(-62deg, #0c4a64 0 45%, #0D1120 0% 100%)",
        "gradient-aboutme" : "linear-gradient(45deg, #EAF7FC 70%, #48AFDE 30%)",
        "gradient-aboutme-dark": "linear-gradient(45deg, #0D1120 70%, #48AFDE 30%)",
        "gradient-testimonial" : "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
        "gradient-testimonial-dark": "linear-gradient(5deg, #48AFDE 0 10%, #171E2C 0% 90%)",
        "gradient-portfolio-detail": "linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%)",
        "gradient-portfolio-detail-dark": "linear-gradient(90deg, #0c4a64 58%, #171E2C 52%)"
      },
      colors: {
        night: {
          DEFAULT: "#0D1120",
          50: "#171E2C",
          500: "#0D1120"
        },
        example: {
          
        }
      },
    },
  },
  plugins: [],
};
