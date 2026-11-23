/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#171923',      // Main body background
          section: '#20232F',      // Primary section cards
          secondary: '#292C38',    // Secondary cards & badges
          elevated: '#323644',     // Elevated card hover state
          border: '#41414B',       // Border line color
        },
        champagne: {
          DEFAULT: '#D8B879',      // Champagne gold
          light: '#E2C895',
          dark: '#C49F58',
          soft: 'rgba(216, 184, 121, 0.12)',
          glow: 'rgba(216, 184, 121, 0.25)',
        },
        beige: {
          DEFAULT: '#E9DCC2',      // Soft beige
          soft: '#F5EFE3',
        },
        palette: {
          text: '#F5F3EF',         // Main text
          muted: '#B8BAC4',        // Secondary text
          dim: '#858796',          // Low emphasis text
        },
      },
      fontFamily: {
        display: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(216, 184, 121, 0.15)',
        'gold-md': '0 4px 20px rgba(216, 184, 121, 0.22)',
        'gold-lg': '0 8px 32px rgba(216, 184, 121, 0.28)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.45), 0 4px 12px -2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
