/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight:{
        '24': '1.5rem',
        '30': '1.875rem',
        '58': '3.625rem'
      }
    },
    borderRadius: {
      'lg': '4rem',
      'full': '9999px',
    },
    colors:{
      'main': '#0A142F',
      'white': '#fff',
      "gray": '#E0E5F3',
      'yellow': '#FFC93E',
      'metalic': '#353F5B',
      'card': '#353F5B',
      
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    spacing: {
      '0': '0',
      '18': '1.125rem',
      '32': '2rem',
      '40': '2.5rem',
      '50': '3.125rem',
      '55': '3.438rem',
      '75': '4.688rem',
      '104': '6.5rem',
      '120': '7.5rem',
      '150': '9.375rem',
      '190': '11.875rem',
      '200': '12.5rem',
      '227': '14.188rem',
      '245': '15.3125rem',
      '342': '21.375rem',
      '367': '22.9375rem',
      '393': '23.5625rem',
      '438': '27.375rem',
      '475': '29.688rem',
      '515': '32.188rem',
      '522': '32.625rem',
      '539': '33.688rem',
      '555': '34.6875rem',
      '576': '36rem',
      '630': '39.375rem',
      '729': '45.563rem',
      '750': '46.875rem',
      '850': '53.125rem',
      '1038': '64.875rem'
    },
    fontSize:{
      '18': '1.125rem',
      '24': '1.5rem',
      '48': '3rem',
      '150': '9.375rem' 
    },
    minHeight:{
      '1/2': '50%',
      '576': '36rem',
    }
    
  },
  plugins: [],
}
