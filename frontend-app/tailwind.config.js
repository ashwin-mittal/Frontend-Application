module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        purpleDark: 'hsl(259, 74%, 20%)',
        purpleLight: 'hsl(258, 72%, 44%)',
        purple: 'hsl(258, 80%, 63%)',
        pink: 'hsl(292, 90%, 73%)',
        secondaryPurple: 'hsl(258, 100%, 95%)',
        darkGray: 'hsl(0, 0%, 31%)',
        lightGray: 'hsl(0, 0%, 60%)',
        secondaryRed: 'hsl(346, 100%, 92%)',
        red: 'hsl(346, 84%, 49%)',
      },
    },
  },
  plugins: [],
}
