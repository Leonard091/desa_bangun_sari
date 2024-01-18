document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Fungsi untuk menambahkan animasi dengan delay yang spesifik
        const addAnimation = (element, animationClass, delay) => {
          setTimeout(() => {
            element.classList.remove('opacity-0');
            element.classList.add(animationClass);
          }, delay);
        };

        // Logika untuk animasi perhitungan angka
        const animateCounter = (element) => {
          const target = +element.getAttribute('data-target');
          const increment = target / 200;
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              element.innerText = Math.ceil(current).toString();
              setTimeout(updateCounter, 10);
            } else {
              element.innerText = target.toString();
            }
          };

          updateCounter();
        };

        // Cek kelas animasi dan terapkan delay yang sesuai
        if (entry.target.classList.contains('geserKiri')) {
          addAnimation(entry.target, 'animate-geserKiri', 500); // Delay 1500ms untuk geserKiri
        } else if (entry.target.classList.contains('efek-masuk')) {
          addAnimation(entry.target, 'animate-masuk', 0); // Delay 0ms untuk efek-masuk
        } else if (entry.target.classList.contains('efek-masuk2')) {
          addAnimation(entry.target, 'animate-masuk2', 0); // Delay 0ms untuk efek-masuk2
        } else if (entry.target.classList.contains('efek-masuk3')) {
          addAnimation(entry.target, 'animate-masuk3', 600); // Delay 0ms untuk efek-masuk2
        } else if (entry.target.classList.contains('efek-masuk3-2')) {
          addAnimation(entry.target, 'animate-masuk3', 1000); // Delay 0ms untuk efek-masuk2
        } else if (entry.target.classList.contains('geserBawah')) {
          addAnimation(entry.target, 'animate-geserBawah', 0); // Delay 1500ms untuk geserBawah
        } else if (entry.target.classList.contains('geserKanan')) {
          addAnimation(entry.target, 'animate-geserKanan', 1000); // Delay 2500ms untuk geserKanan
        } else if (entry.target.classList.contains('geserKanan-2')) {
          addAnimation(entry.target, 'animate-geserKanan', 1200); // Delay 2500ms untuk geserKanan
        }  else if (entry.target.classList.contains('geserKanan-3')) {
          addAnimation(entry.target, 'animate-geserKanan', 1400); // Delay 2500ms untuk geserKanan
        }  else if (entry.target.classList.contains('geserKanan-4')) {
          addAnimation(entry.target, 'animate-geserKanan', 1600); // Delay 2500ms untuk geserKanan
        }  else if (entry.target.classList.contains('geserKanan-5')) {
          addAnimation(entry.target, 'animate-geserKanan', 1800); // Delay 2500ms untuk geserKanan
        }  else if (entry.target.classList.contains('geserKanan-6')) {
          addAnimation(entry.target, 'animate-geserKanan', 2000); // Delay 2500ms untuk geserKanan
        }  else if (entry.target.classList.contains('geserKanan')) {
          addAnimation(entry.target, 'animate-geserKanan', 1000); // Delay 2500ms untuk geserKanan
        }   else if (entry.target.classList.contains('geserKiri-2')) {
          addAnimation(entry.target, 'animate-geserKiri', 700); // Delay 2500ms untuk geserKiri
        } else if (entry.target.classList.contains('geserKiri-3')) {
          addAnimation(entry.target, 'animate-geserKiri', 1100); // Delay 2500ms untuk geserKiri
        }  else if (entry.target.classList.contains('geserKiri-4')) {
          addAnimation(entry.target, 'animate-geserKiri', 1500); // Delay 2500ms untuk geserKiri
        }  else if (entry.target.classList.contains('geserKiri-5')) {
          addAnimation(entry.target, 'animate-geserKiri', 1700); // Delay 2500ms untuk geserKiri
        } else if (entry.target.classList.contains('subJudul')) {
          addAnimation(entry.target, 'animate-subJudul', 0); // Delay 0ms untuk subJudul
        } else if (entry.target.classList.contains('counter')) {
          if (entry.target.classList.contains('animated')) {
        } else {
          animateCounter(entry.target);
          entry.target.classList.add('animated');
        }
        }
      }
    });
  });

  // Targetkan semua elemen yang ingin di-animasikan
  const targets = document.querySelectorAll(".efek-masuk, .efek-masuk2, .efek-masuk3, .efek-masuk3-2, .geserBawah, .geserKiri, .geserKiri-2, .geserKiri-3, .geserKiri-4, .geserKiri-5, .geserKanan, .geserKanan-2, .geserKanan-3, .geserKanan-4, .geserKanan-5, .geserKanan-6, .subJudul, .counter");
  targets.forEach(target => {
    observer.observe(target);
  });
});
