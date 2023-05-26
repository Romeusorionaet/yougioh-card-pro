/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '10': '10rem',
        '15': '15rem',
        '14': '14rem',
        '20': '20rem',
        '22': '22rem',
        '28': '28rem',
        '30': '30rem',
        '32': '32rem',
      },
      
      height: {
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '10': '10rem',
        '15': '15rem',
        '20': '20rem',
        '22': '22rem',
        '25': '25rem',
        '28': '28rem',
        '32': '32rem',
        '38': '38rem',
        '44': '44rem',
        '57': '57rem',
      },

      animation: {
        'pulse-slow': 'pulse 3s linear',
      },

      screens: {
        'tablet': '800px',
      },
    },
  },
  plugins: [],
}
