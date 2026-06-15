const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  console.log("clicked");
  navLinks.classList.toggle("active");
});

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");
