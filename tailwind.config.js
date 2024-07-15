/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Sans: ['Montserrat', 'Lato', 'Open Sans', 'Poppins', 'Raleway', 'Helvetica', 'Arial', 'sans-serif'],
      
      Serif: ['Merriweather', 'Playfair Display', 'Crimson Pro', 'Cormorant Garamond', 'Bodoni Moda', 'Source Serif Pro', 'serif'],
      Slab: ['Roboto Slab', 'Arvo', 'Lora', 'Spectral', 'Zilla Slab'],
      Display: ['Pacifico', 'Lobster', 'Dancing Script', 'Cinzel', 'Alfa Slab One'],
      Handwritten: ['Sacramento', 'Satisfy', 'Fredericka the Great'],
      Orbitron: ['Audiowide', 'Russo One', 'Press Start 2P', 'Exo 2'],
    },
    extend: {
      colors: {
        'hover-color': '#ff8383', // Replace with your desired color
      },
    },
  },
  plugins: [],
}
