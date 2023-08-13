const toastContainer = document.querySelector(".toast-container");
document.querySelector("button").addEventListener("click", () => {
  let newToast = document.createElement("div");
  newToast.className = "toast toast-error";
  newToast.textContent = "Success";
  toastContainer.append(newToast);

  setTimeout(() => {
    newToast.remove();
  }, 1000);
});
