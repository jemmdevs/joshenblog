/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#C62F41',
        background: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Saira', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        brand: ['Saira', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        pixel: ['Saira', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

