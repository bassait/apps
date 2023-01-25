/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "light-line-10": "0px 0px 12px rgba(200, 200, 200, 0.5)",
        "light-line-20": "0px 0px 20px rgba(200, 200, 200, 0.5)",
        "light-line-30": "0px 0px 30px rgba(200, 200, 200, 0.5)",
        "light-line-40": "0px 0px 40px rgba(200, 200, 200, 0.5)",
        "light-line-50": "0px 0px 50px rgba(200, 200, 200, 0.5)",
      }
    },
  },
  plugins: [],
}
