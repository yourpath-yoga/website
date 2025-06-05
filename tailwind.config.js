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
          50: "#F5F9FF",
          100: "#E6F0FF",
          200: "#CCE0FF",
          300: "#99C2FF",
          400: "#66A3FF",
          500: "#3385FF",
          DEFAULT: "#3385FF",
          600: "#0066FF",
          700: "#0047B3",
          800: "#002966",
          900: "#001433"
        },
        'secondary': {
          50: "#F5FAF8",
          100: "#E6F5F0",
          200: "#CCEBE0",
          300: "#99D7C1",
          400: "#66C3A3",
          500: "#33AF84",
          DEFAULT: "#33AF84",
          600: "#009B66",
          700: "#006D48",
          800: "#003F2A",
          900: "#00120D"
        },
        'accent': {
          50: "#F9F5FF",
          100: "#F0E6FF",
          200: "#E0CCFF",
          300: "#C199FF",
          400: "#A366FF",
          500: "#8533FF",
          DEFAULT: "#8533FF",
          600: "#6600FF",
          700: "#4700B3",
          800: "#290066",
          900: "#0D0033"
        },
        'dark': "#2C3E50",
        'light': "#FFFFFF",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
