/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        apple: {
          bgLight: '#f5f5f7',
          bgDark: '#050507',
          textLight: '#1d1d1f',
          mutedLight: '#6e6e73',
          textDark: '#f5f5f7',
          mutedDark: '#98989d',
          blue: '#0071e3',
          blueDark: '#2997ff',
        },
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.04)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
