document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
  var menu = document.getElementById('mobile-menu-2');
  var saranaPrasaranaMenu = document.getElementById('menu-sarana-prasarana');
  var saranaPrasaranaSubmenu = saranaPrasaranaMenu.querySelector('ul');
  var potensiMenu = document.getElementById('menu-potensi');
  var potensiSubmenu = potensiMenu.querySelector('ul');

  toggleButton.addEventListener('click', function() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('animate-dropDown');
  });

  saranaPrasaranaMenu.addEventListener('click', function(event) {
      if (window.innerWidth < 1024) { // Ganti 1024 dengan breakpoint untuk versi mobile Anda
        saranaPrasaranaSubmenu.classList.toggle('hidden');
        saranaPrasaranaSubmenu.classList.toggle('absolute');
        saranaPrasaranaSubmenu.classList.toggle('animate-subDropDown');
        event.preventDefault(); // Mencegah navigasi link default pada mobile
      } 
  });

  potensiMenu.addEventListener('click', function(event) {
    if (window.innerWidth < 1024) { // Pastikan breakpoint ini sesuai dengan konfigurasi Tailwind CSS Anda
      potensiSubmenu.classList.toggle('hidden');
      potensiSubmenu.classList.toggle('absolute');
      potensiSubmenu.classList.toggle('animate-subDropDown');
      event.preventDefault(); // Mencegah navigasi link default pada mobile
    }
  });
});   



