const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.children[1].textContent = "";
  e.target.children[3].textContent = "";
  if (!passwordValidate(e.target.children[0].value)) {
    e.target.children[1].textContent = "Password is not valid.";
    return;
  }
  if (e.target.children[0].value !== e.target.children[2].value) {
    e.target.children[1].textContent = "Passwords must match.";
    e.target.children[3].textContent = "Passwords must match.";
    return;
  }
});

function passwordValidate(text) {
  return passwordRegex.test(text);
}
