/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#7d858c',
          600: '#6b7280',
          700: '#5a6169',
          800: '#4a5056',
          900: '#3c4043',
        },
        secondary: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#f8f9fa',
          300: '#f1f3f4',
          400: '#e8eaed',
          500: '#dadce0',
          600: '#bdc1c6',
          700: '#9aa0a6',
          800: '#80868b',
          900: '#5f6368',
        },
        accent: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      }
    },
  },
  plugins: [],
}