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
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out-up': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out forwards',
        'fade-out-up': 'fade-out-up 0.3s ease-in forwards',
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
        '23': '0.23',
        '25': '0.25',
        '30': '0.30',
        '70': '0.70',
      },
      screens: {
        'vsm': '320px', // very-small
        'vsm1': '362px',
        'vsm15': '385px',
        'vsm2': '407px',
        'vsm3': '453px',
        'vsm4': '500px',
        'msm': '550px', // medium-small
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
      fontSize: {
        //xs: ['0.75rem', { lineHeight: '1rem' }],       // 12px
        //sm: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        //base: ['1rem', { lineHeight: '1.5rem' }],      // 16px
        //lg: ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
        lg1: ['1.12rem', { lineHeight: '1.75rem' }],
        //xl: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
        //'2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        //'3xl': ['1.875rem', { lineHeight: '2.25rem' }],// 30px
        //'4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
        //'5xl': ['3rem', { lineHeight: '1' }],          // 48px
        //'6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
        //'7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
        //'8xl': ['6rem', { lineHeight: '1' }],          // 96px
        //'9xl': ['8rem', { lineHeight: '1' }],          // 128px
      }
    },
  },
  plugins: [
    function ({ addVariant, e, postcss }) {
      addVariant('no-hover', ({ container, separator }) => {
        const rule = postcss.atRule({ name: 'media', params: '(hover: none)' });
        rule.append(container.nodes);
        container.append(rule);
        rule.selector = `.${e(`no-hover${separator} `)}&`;
      });
      addVariant('hover-supported', ({ container, separator }) => {
        const rule = postcss.atRule({ name: 'media', params: '(hover: hover)' });
        rule.append(container.nodes);
        container.append(rule);
        rule.selector = `.${e(`hover-supported${separator} `)}&`;
      });
      addVariant('group-no-hover', ({ container, separator }) => {
        const rule = postcss.atRule({ name: 'media', params: '(hover: none)' });
        rule.append(container.nodes);
        container.append(rule);
        rule.selector = `.${e(`no-hover${separator}group`)}:${e(`active${separator}`)} &`;
      });

      addVariant('group-hover-supported', ({ container, separator }) => {
        const rule = postcss.atRule({ name: 'media', params: '(hover: hover)' });
        rule.append(container.nodes);
        container.append(rule);
        rule.selector = `.${e(`hover-supported${separator}group`)}:${e(`hover${separator}`)} &`;
      });
    },
  ],
}

