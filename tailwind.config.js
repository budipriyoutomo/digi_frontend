/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    container:{
      center:true,
      padding:'10px',
    },
    extend: {
      colors: {
        primary: '#ED3237',
        dark:'#0f172a',
        secondary: '#64748b',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
