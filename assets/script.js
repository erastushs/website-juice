//

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active", window.scrollY > 0);
});

// script hamburger untuk mobile responsive
const menuToggle = document.querySelector(".menu-toggle input");
const ul = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
