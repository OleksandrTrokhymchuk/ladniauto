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
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)', // Починаємо трохи вище
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)', // Завершуємо на початковому місці
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out forwards', // 0.3 секунди, плавне завершення, залишається в кінцевому стані
      },
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
        '17': '0.17',
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

