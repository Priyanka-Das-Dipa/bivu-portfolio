/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-blue": "linear-gradient(to right, #9642a7, #3951f2)",
      },
      keyframes: {
        // wave: {
        //   '0%, 100%': { transform: 'translateX(-5px)' },
        //   '50%': { transform: 'translateX(5px)' },
        // },
        // bounceUpDown: {
        //   "0%, 100%": { transform: "translateY(-5px)" }, // Moves up
        //   "50%": { transform: "translateY(5px)" }, // Moves down
        // },
      },
      // animation: {
      //   wave: 'wave 1s ease-in-out infinite',
      // },
      // animation: {
      //   bounceUpDown: "bounceUpDown 1s ease-in-out infinite",
      // },
    },
  },
  plugins: [require("daisyui")],
};
