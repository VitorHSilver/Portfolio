/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
          extend: {
               colors: {
                    crocoGreen: '#495D3A',
               },
               gridTemplateColumns: {
                    'custom-layout': '1fr 2fr',
               },
               // gridRespoTemplateColumns: {
               //      'auto-fit-minmax': 'repeat(auto-fit, minmax(300px, 1fr))',
               // },
               screens: {
                    smartphone: '400px',
                    smallscreen: '200px',
               },
          },
     },
     plugins: [],
};
