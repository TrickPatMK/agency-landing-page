const triggerButton = document.getElementById("trigger-btn");
console.log(triggerButton);
const mobileNav = document.querySelector("#mobile-nav");

triggerButton.onclick = (e) => {
  e.preventDefault();
  mobileNav.classList.toggle("active");
};
