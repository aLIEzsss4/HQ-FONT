/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#010101',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #353535 0%, #2E2E2E 100%)'
      }
    },
    fontFamily: {
      'next-book': ['var(--font-next-book)'] 
    }
  },
  plugins: [],
}
