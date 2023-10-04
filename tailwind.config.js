/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'vermelho': ['hsl(0, 78%, 62%)'],
        'ciano': ['hsl(180, 62%, 55%)'],
        'laranja': ['hsl(34, 97%, 64%)'],
        'azul': ['hsl(212, 86%, 64%)'],
        'darkblue': ['hsl(234, 12%, 34%)'],
        'grayishblue': ['hsl(229, 6%, 66%)'],
        'lightgray': ['hsl(0, 0%, 98%)']
      },
    },
  },
  plugins: [],
}

