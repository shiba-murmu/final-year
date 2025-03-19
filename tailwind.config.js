/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * This part here use for variables for the app
       */
      backgroundImage: {
        'gradient-bg': 'var(--gradient-bg)',
        'gradient-bg2': 'var(--gradient-bg2)',
      },
    },
  },
  plugins: [],
  
}

