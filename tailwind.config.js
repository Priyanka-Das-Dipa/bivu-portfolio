/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-blue": "linear-gradient(to right, #9642a7, #3951f2)",

        'primary-gradient': 'linear-gradient(to right, #6a0dad, #3951f2)',
        'contact': 'linear-gradient(to right, #9b47e4, #678ef9)'
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
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
