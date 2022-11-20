module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: { min: '0', max: '480px' },
        mobile: { min: '0', max: '480px' },
        tablet: { min: '480px', max: '768px' },
        handheld: { min: '0', max: '768px' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1680px',
      },
    },
  },
  plugins: [],
}
