/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Menambahkan font Poppins biar UI-nya 100% mirip Figma
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Warna asli dari Sipa
        'fintrack-bg': '#efeefc',
        'fintrack-pink-light': '#feeefd',
        'fintrack-pink-dark': '#e584ee',

        // Warna Kategori yang kita sepakati (Ungu, Hijau, Merah)
        'fintrack-purple': '#8477e4', // Kebutuhan
        'fintrack-green': '#10B981',  // Keinginan
        'fintrack-red': '#EF4444',    // Tabungan
        
        // Warna kartu transparan (Glassmorphism)
        'fintrack-card': 'rgba(255, 255, 255, 0.7)',
      }
    },
  },
  plugins: [],
}