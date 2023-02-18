/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'success': 'var(--success)',
        'info': 'var(--info)',
        'warning': 'var(--warning)',
        'danger': 'var(--danger)',
      },
    },
  },
  plugins: [],
}
