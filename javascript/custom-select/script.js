const selectContainer = document.querySelector(".select_container");
const seclectDropdown = document.querySelector(".select_dropdown");
const selectOptions = document.querySelectorAll(".select_dropdown p");
const selectInput = document.querySelector(".select_container input");

selectContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

selectInput.addEventListener("focus", () => {
  seclectDropdown.style.display = "initial";
  if (!selectInput.value) return;
  filterOptions();
});

selectInput.addEventListener("keyup", (e) => {
  filterOptions();
});

function filterOptions() {
  selectOptions.forEach((option) => {
    option.style.display = option.textContent
      .toLowerCase()
      .startsWith(selectInput.value.toLowerCase().trim())
      ? "block"
      : "none";
  });
}

selectOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectInput.value = option.textContent;
    seclectDropdown.style.display = "none";
  });
});

window.onclick = (e) => {
  seclectDropdown.style.display = "none";
};

// document.querySelector("span").addEventListener("click", (e) => {
//   console.log("span clicked");
// });
// document.querySelector("p").addEventListener("click", () => {
//   console.log("p clicked");
// });
// document.querySelector("div").addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("div clicked");
// });
// document.querySelector("body").addEventListener("click", () => {
//   console.log("body clicked");
// });
// window.onclick = () => {
//   console.log("window clicked");
// };
