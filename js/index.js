// Select the menu button, navbar, close button, and navbar-top
const menuBtn = document.querySelector('#menu'); // Button with ID "menu"
const navbar = document.querySelector('.navbar'); // Navigation container
const navCloseBtn = document.querySelector('.nav-close-btn'); // Close button
const navbarTop = document.querySelector('.navbar-top'); // Navbar top section
const header=document.querySelector('.header-bottom')
menuBtn.addEventListener('click', () => {
  navbar.classList.add('active'); 
  navbarTop.style.display = 'block'; 
});


if (navCloseBtn) {
  navCloseBtn.addEventListener('click', () => {
    navbar.classList.remove('active'); 
    navbarTop.style.display = 'none'; 
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const headerTop = document.querySelector(".header-top");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down: hide the top navbar
      headerTop.style.transform = "translateY(-100%)";
      header.style.position = "fixed";
      header.style.top = "-94px";
      
    } else {
      // Scrolling up: show the top navbar
      headerTop.style.transform = "translateY(0)";
      header.style.position = "fixed";
      header.style.top = "-50px";
    }
    lastScrollY = window.scrollY; // Update the last scroll position
  });
});


