import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      colors: {
        'primary': {
          100: "#f5e6e8",
          200: "#ebcdd1",
          300: "#e1b4ba",
          400: "#d79ba3",
          500: "#CD828C",
          DEFAULT: "#CD828C",
          600: "#a46870",
          700: "#7b4e54",
          800: "#523438",
          900: "#291a1c"
        },
        'secondary': {
          100: "#f0e9e0",
          200: "#e1d3c1",
          300: "#d2bda2",
          400: "#c3a783",
          500: "#B49164",
          DEFAULT: "#B49164",
          600: "#907450",
          700: "#6c573c",
          800: "#483a28",
          900: "#241d14"
        },
        'accent': {
          100: "#e8f4e8",
          200: "#d1e9d1",
          300: "#badeba",
          400: "#a3d3a3",
          500: "#8CC88C",
          DEFAULT: "#8CC88C",
          600: "#70a070",
          700: "#547854",
          800: "#385038",
          900: "#1c281c"
        },
        'dark': "#2C3E50",
        'light': "#FDF6E3",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
