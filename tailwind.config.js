/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animationDelay: { // Ini adalah custom utility dengan prefix 'anim-delay-'
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1': '1000ms',
        '2': '2000ms',
        '3': '3000ms',
        // Tambahkan nilai delay lain sesuai yang Anda butuhkan
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        nature: {"50":"#D2E3C8","100":"#86A789","200":"#739072","300":"#4F6F52"}
      },
      screens: {
        'ssm': '1px',
      },
      animation: {
        masuk: 'masuk 2s ease-in-out 1',
        masuk2: 'masuk2 2s ease-in-out 1',
        masuk3: 'masuk3 2s ease-in-out 1',
        geserBawah: 'geserBawah 2s ease-out 1',
        geserKiri: 'geserKiri 2s ease-out 1',
        geserKanan: 'geserKanan 2s ease-out 1',
        subJudul: 'subJudul 2s ease-out 1',
        wiggle: 'wiggle .5s ease-in-out infinite',
        wiggle2: 'wiggle 1s ease-in-out infinite',
        dropDown: 'dropDown .5s ease-out forwards',
        subDropDown: 'subDropDown .5s ease-out forwards',
      },
      keyframes: {
        masuk: {
          from: {
            transform: 'scale(1.2)',
            opacity: '0',
          },
          to: {
            transfom: 'scale(1)',
            opacity: '1',
          },
        },
        dropDown: {
          from: { 
            opacity: '0', 
            transform: 'translateY(-20px)',
            backgroundColor: 'transparent'
        },
          to: { 
              opacity: '1', 
              transform: 'translateY(0)',
              backgroundColor: '#D2E3C8', 
          },
        },
        subDropDown: {
          from: { 
            opacity: '0', 
            transform: 'translateY(-20px)',
            backgroundColor: 'transparent'
        },
          to: { 
              opacity: '1', 
              transform: 'translateY(0)',
              backgroundColor: '#86A789', 
          },
        },
        masuk2: {
          from: {
            transform: 'scale(.9)',
            opacity: '0',
          },
          to: {
            transfom: 'scale(1)',
            opacity: '1',
          },
        },
        masuk3: {
          from: {
            transform: 'scale(.95)',
            opacity: '0',
          },
          to: {
            transfom: 'scale(1)',
            opacity: '1',
          },
        },
        geserBawah: {
          from: {
            transform: 'translateY(100px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
        geserKiri: {
          from: {
            transform: 'translateX(-100px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0px)',
            opacity: '1',
          },
        },
        geserKanan: {
          from: {
            transform: 'translateX(100px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0px)',
            opacity: '1',
          },
        },
        subJudul: {
          from: {
            transform: 'scale(1.5)',
            opacity: '0',
          },
          to: {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
      },
    },

  },
  plugins: [
    require('tailwindcss-animation-delay'),
  ],
}
}
