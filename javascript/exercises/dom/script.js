const registerBtn = document.querySelector("#register_container button");
const registerInputs = document.querySelectorAll("#register_container input");
const usersTableBody = document.querySelector("tbody");
const loginBtn = document.querySelector("#login_container button");
const loginInputs = document.querySelectorAll("#login_container input");
const loginResult = document.querySelector("#login_container p");

const usersArr = [];

registerBtn.addEventListener("click", () => {
  if (!validateInputs(registerInputs, "Register")) return;

  if (registerInputs[1].value.trim() !== registerInputs[2].value.trim()) {
    alert("Passwords must match!");
    return;
  }

  usersArr.push({
    email: registerInputs[0].value.trim(),
    password: registerInputs[1].value.trim(),
  });

  const newTrElement = document.createElement("tr");
  const newEmailTdElement = document.createElement("td");
  const newPasswordTdElement = document.createElement("td");
  newEmailTdElement.textContent = registerInputs[0].value.trim();
  newPasswordTdElement.textContent = registerInputs[1].value.trim();
  newTrElement.append(newEmailTdElement, newPasswordTdElement);
  usersTableBody.append(newTrElement);
  resetInputs(registerInputs);
});

loginBtn.addEventListener("click", () => {
  if (!validateInputs(loginInputs, "Login")) return;
  const user = usersArr.find(
    (element) =>
      element.email === loginInputs[0].value &&
      element.password === loginInputs[1].value
  );
  if (user) {
    loginResult.textContent = "Logged In";
    loginResult.style.color = "green";
  } else {
    loginResult.textContent = "User doesn't exist!";
    loginResult.style.color = "red";
  }
  // resetInputs(loginInputs);
});

function validateInputs(inputArr, type) {
  for (let i = 0; i < inputArr.length; i++) {
    if (!inputArr[i].value.trim()) {
      alert(`${type} fields must be filled!`);
      return false;
    }
  }
  return true;
}

function resetInputs(inputArr) {
  for (let input of inputArr) {
    input.value = "";
  }
}
