/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        off: '#f8f8f8',
        mid: '#aaaaaa',
        border: '#e0e0e0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        tighter2: '-0.04em',
        widest2: '0.16em',
      },
      borderWidth: { '0.5': '0.5px' },
      boxShadow: {
        'hard': '4px 4px 0 #0a0a0a',
        'hard-sm': '2px 2px 0 #0a0a0a',
      },
    },
  },
  plugins: [],
}
