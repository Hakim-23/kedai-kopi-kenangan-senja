// Toggle class active untuk navbar tablet & mobile-menu
const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Toggle aktif sidebar
hamburgerMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

// Close sidebar jika klik di luar sidebar atau hamburger
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});