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
               screens: {
                    smartphone: '400px',
               },
          },
     },
     plugins: [],
};
