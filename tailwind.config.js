/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                custom1: '0 0 1rem 0.5rem #0ef',
                custom2: '0 0 0.7rem 0.1rem #0ef'
            },

            colors: {
                primary: '#0ef'
            }
        }
    },
    plugins: []
};
