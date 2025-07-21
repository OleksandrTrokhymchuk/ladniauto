/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'project-blue': '#024097',
        'project-white': '#feffff',
        'project-green': '#4F9B68',
        'project-blue-darker': '#013070',
      },
       fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      height: {
        '0.25': '0.0625rem',
      },
    },
  },
  plugins: [],
}

