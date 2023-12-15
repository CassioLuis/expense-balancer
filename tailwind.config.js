/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,vue,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '600x',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',
      'xxl': '2560px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
