const hamburgerMenuBtn = document.querySelector(".navbar>button");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuClostBtn = document.querySelector(".hamburger-menu .close");
hamburgerMenuBtn.addEventListener("click", () => {
  hamburgerMenu.style.top = 0;
});
hamburgerMenuClostBtn.addEventListener("click", () => {
  hamburgerMenu.style.top = "-150px";
});
