module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFEBEB',
          200: '#FFD6D6',
          300: '#FFADAD',
          400: '#FF7070',
          500: '#FF5C5C',
          600: '#CC4A4A',
          700: '#A30000',
          800: '#7A0000',
          900: '#520000',
        },
        whatsapp: { DEFAULT: '#21be5c' },
        brand: { DEFAULT: 'var(--brand)' },
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      screens: {
        xs: '375px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
