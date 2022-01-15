const triggerButton = document.getElementById("trigger-btn");
const mobileNav = document.querySelector("#mobile-nav");

triggerButton.onclick = (e) => {
  e.preventDefault();
  mobileNav.classList.toggle("active");
};

window.addEventListener("resize", () => {
  window.innerWidth > 768 ?? mobileNav.classList.remove("active");
});
