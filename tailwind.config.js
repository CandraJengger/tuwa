/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      'delius-swash-caps': ['"Delius Swash Caps"', 'cursive']
    }
  },
  extend: {
    colors: {
      transparent: 'transparent'
    }
  },
  plugins: []
};
