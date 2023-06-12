/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      main: '#6D7AFF',
      second: '#686976',
      black: '#000000',
      'light-black': '#252525',
      white: '#FFFFFF',
      gray: '#DDDDDD',
      'light-gray': '#F0F1F4',
    }
  },
  plugins: [],
}
