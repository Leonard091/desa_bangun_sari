document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.getElementById('menu-button');
  var dropdownMenu = document.getElementById('menu');
  menuButton.addEventListener('click', function () {
    dropdownMenu.classList.toggle('hidden');
  });
});