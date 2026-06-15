export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#2d6a9f',
          hover: '#245a8a',
          dark: '#1e2433',
        },
        accent: '#4a9aba',
        services: '#2d3748',
        lightgray: '#f7f8fa',
        bodytext: '#374151',
        heading: '#1f2937',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
