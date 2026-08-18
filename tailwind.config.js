
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        round: {
          bg: "#eaf2fb",
          surface: "#ffffff",
          accent: "#3b6ff6",
          accentDark: "#1e4fd1",
          navy: "#10182b",
          gray: "#5b6472",
          border: "#e4e9f0",
        },
      },
      fontFamily: {
        round: ["Nunito_Sans", "sans-serif"],
      },
      aria: {
        current: 'current="page"',
      },
    },
  },
  plugins: [],
};
