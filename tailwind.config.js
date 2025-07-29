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
        'project-green': '#149218',
        'project-blue-darker': '#013070',
      },
       fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      height: {
        '0.25': '0.0625rem',
      },
      scale: {
        '10': '0.10',
        '25': '0.25',
        '30': '0.30',
        '70': '0.70',
      },
      screens: {
        'vsm': '320px', // very-small
        'vsm1': '350px',
        'vsm2': '400px',
        'vsm3': '450px',
        'vsm4': '500px',
        'msm': '550px', // medium-small
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

