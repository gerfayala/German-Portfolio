/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/src/**/*.{js,jsx,ts,tsx}",
    "./app/src/components/**/*.{js,jsx,ts,tsx}",
  ],
 
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}