/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@my-company/tailwind-components/**/*.js',
  ],
  theme: {
    fontSize: {
      'xl': ['1.25rem', {
        lineHeight: '1.75rem',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        fontWeight: '700',
      }],
      '4xl': ['2.5rem', {
        lineHeight: '2.5rem',
      }],
    },
    letterSpacing: {
      title: '.5rem',
    },
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(135deg, rgba(123,213,245,1) 0%, rgba(120,127,246,1) 100%)",
      },
      textUnderlineOffset: {
        4: '4px'
      },
      colors: {
        'menuItem': '#243c5a',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '2/1': '2 / 1',
        '16/9': '16 / 9'
      },
      translate: {
        'visible': '-120%',
      }
    }
  },
  plugins: [],
}