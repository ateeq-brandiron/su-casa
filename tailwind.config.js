/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f4daa8',
          300: '#edc06e',
          400: '#e4a03e',
          500: '#d4851f',
          600: '#b86917',
          700: '#974f16',
          800: '#7a3f18',
          900: '#643517',
        },
        dark: {
          900: '#0f0e0c',
          800: '#1a1814',
          700: '#252219',
          600: '#302d21',
          500: '#3d3927',
        },
        cream: {
          50:  '#fdfbf7',
          100: '#f9f4ea',
          200: '#f2e8d0',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        accent:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
