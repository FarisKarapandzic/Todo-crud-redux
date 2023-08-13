/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        520: "520px", // Custom width value
      },
      backgroundColor: {
        'menibox': '#161a2b', // Your custom color hash value
      },
    },
  },
    plugins: [],
  };

