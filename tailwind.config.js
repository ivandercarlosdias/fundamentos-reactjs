/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      fontFamily: {
         display: ['Poppins', 'sans-serif'],
      },
      colors: {
         white: '#ffffff',
         red: {
            400: '#ff4172',
            500: '#f71953',
         },
         gray: {
            100: '#c3c8dd',
            300: '#a6acc4',
            400: '#64697b',
            600: '#232633',
            700: '#1A1D28',
            800: '#161823',
            900: '#11131d',
         },
      },
   },
   plugins: [],
}
