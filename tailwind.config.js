module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "0", max: "480px" },
        sm: { min: "640px" },
        md: { min: "768px" },
        lg: { min: "960px" },
        xl: { min: "1280px" },
        "2xl": { min: "1680px" },
        "3xl": { min: "1920px" },
        mobile: { min: "0", max: "480px" },
        tablet: { min: "480px", max: "960px" },
        handheld: { min: "0", max: "960px" },
        desktop: { min: "960px" },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
