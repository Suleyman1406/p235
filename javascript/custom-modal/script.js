const openBtn = document.querySelector("body>button");
const closeBtn = document.querySelector(".modal>button");
const modalContainer = document.querySelector(".modal-container");

openBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

closeBtn.parentElement.addEventListener("click", (e) => {
  e.stopPropagation();
});
