module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./libs/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blob-gap-sm': "url('/background-blob-mobile.svg')",
        'blob-gap-md': "url('/background-blob.svg')",
      },
      fontFamily: {
        lato: ["'Lato' sans-serif"],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
  ],
}
