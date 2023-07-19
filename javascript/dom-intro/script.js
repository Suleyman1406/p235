// console.log(window.document);

// document.body.style.backgroundColor = "red";
// document.body.style.width = "200px";
// console.log(document.body.style.backgroundColor);

// console.log(document.body.childNodes);
// document.body.childNodes[0].style.color = "red";
// console.log(document.body.childNodes[2].href);

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.children[0].children[0]);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.firstElementChild.lastElementChild);

// console.log(
//   document.body.firstElementChild.parentElement.parentElement.parentElement
// );

// console.log(
//   document.body.firstElementChild.lastElementChild.previousElementSibling
//     .nextElementSibling.nextElementSibling
// );

// console.log(document.getElementById("container_div"));

// const myContainer = document.getElementById("container_div");
// myContainer.style.backgroundColor = "yellow";

// const cards = document.getElementsByClassName("card");

// for (let card of cards) {
//   card.style.color = "green";
// }

// const spanElements = document.getElementsByTagName("span");
// console.log(spanElements);

// const span = document.querySelector("#container_div > span");
// console.log(span);
// const spans = document.querySelectorAll("#container_div > span>a");
// console.log(spans);

const containerDiv = document.querySelector("#container");
// containerDiv.innerHTML += "<a href='https://google.com'>test</a>";
// console.log(containerDiv.innerHTML);
// containerDiv.innerHTML = "<p>trial</p>";
// console.log(containerDiv.outerHTML);
// containerDiv.outerHTML = "<p>trial</p>";
// containerDiv.innerHTML = "";
// containerDiv.outerHTML = "<p>trial</p>";
// console.log(containerDiv.outerHTML);

// console.log(containerDiv.textContent);
// containerDiv.textContent = "<p>hello again</p>";

// containerDiv.innerHTML = "<p style='background-color:red'>asd</p>";

// const newPElement = document.createElement("p");
// newPElement.id = "test_id";
// newPElement.className = "card card_primary";
// newPElement.textContent = "Hello world";
// console.log(newPElement);

// containerDiv.appendChild(newPElement);
// containerDiv.append(newPElement);
// containerDiv.prepend(newPElement);
// containerDiv.lastElementChild.before(newPElement);
// containerDiv.firstElementChild.after(newPElement);
// containerDiv.firstElementChild.remove();
// containerDiv.remove();
// console.log(document.body.parentElement.remove());
// document.getElementById("test_id").remove();

// const fruitsInput = document.getElementById("fruits_input");
// const saveBtn = document.getElementById("save_btn");
// const fruitsList = document.getElementById("fruits_list");

// saveBtn.onclick = function () {
//   if (!fruitsInput.value.trim()) {
//     return;
//   }
//   const newLiElement = document.createElement("li");
//   const newButtonElement = document.createElement("button");
//   newButtonElement.textContent = "X";
//   newLiElement.textContent = fruitsInput.value;
//   newLiElement.append(newButtonElement);
//   fruitsList.append(newLiElement);
//   fruitsInput.value = "";
//   newButtonElement.onclick = function () {
//     newLiElement.remove();
//   };
// };

// const passwordContainer = document.getElementById("password_container");

// passwordContainer.lastElementChild.onclick = () => {
//   let input = passwordContainer.firstElementChild;
//   input.type = input.type === "password" ? "text" : "password";
// };

// const fruitsList = document.querySelector("ul");

// for (const fruitLiElement of fruitsList.children) {
//   fruitLiElement.onclick = () => {
//     console.log(fruitLiElement.classList);
//     // if (fruitLiElement.classList.contains("active")) {
//     //   fruitLiElement.classList.remove("active");
//     // } else {
//     //   fruitLiElement.classList.add("active");
//     // }
//     fruitLiElement.classList.toggle("active");
//   };
// }

const saveBtn = document.querySelector("button");
// let saveBtnClick1 = () => {
//   console.log("butonuma click edildi");
// };

// let saveBtnClick2 = () => {
//   console.log("butonuma click edildi 2");
// };
// saveBtn.addEventListener("click", saveBtnClick1);
// saveBtn.addEventListener("click", saveBtnClick2);

// saveBtn.removeEventListener("click", saveBtnClick1);

// saveBtn.addEventListener("click", (e) => {
//   console.log(e.target);
//   e.target.textContent = "test";
// });
// saveBtn.addEventListener("mouseenter", () => {
//   console.log("mouse entered");
// });

// saveBtn.addEventListener("mouseleave", () => {
//   console.log("mouse left");
// });

// saveBtn.addEventListener("mousemove", () => {
//   console.log("mouse moved");
// });

// saveBtn.addEventListener("mouseup", () => {
//   console.log("mouse up");
// });
// saveBtn.addEventListener("mousedown", () => {
//   console.log("mousedown");
// });
// saveBtn.addEventListener("dblclick", () => {
//   console.log("dblclick");
// });

// const input = document.querySelector("input");
// input.addEventListener("keydown", () => {
//   console.log("keydown");
// });
// input.addEventListener("keyup", () => {
//   console.log("keyup");
// });
// input.addEventListener("keydown", (e) => {
//   console.log(e.target);
// });
// input.addEventListener("focus", (e) => {
//   console.log(e);
// });
// input.addEventListener("blur", (e) => {
//   console.log(e);
// });

// input.addEventListener("keydown", (e) => {
//   console.log(e.target.value);
// });
// input.addEventListener("keypress", (e) => {
//   console.log(e.target.value);
// });
// input.addEventListener("keyup", (e) => {
//   console.log(e.target.value);
// });

let myArr = [
  { name: "Mahmud", age: 30 },
  { name: "Nicat", age: 22 },
  { name: "Murad", age: 29 },
  { name: "Tahir", age: 12 },
  { name: "Necef", age: 88 },
];

let tBody = document.querySelector("tbody");

myArr.forEach((element) => {
  const newTrElement = document.createElement("tr");
  const newNameTdElement = document.createElement("td");
  newNameTdElement.textContent = element.name;
  const newAgeTdElement = document.createElement("td");
  newAgeTdElement.textContent = element.age;
  newTrElement.append(newNameTdElement, newAgeTdElement);
  tBody.append(newTrElement);
});

let input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  let value = e.target.value.trim();
  Array.from(tBody.children).forEach((element) => {
    if (
      !element.firstElementChild.textContent
        .toLowerCase()
        .trim()
        .includes(value.toLowerCase())
    ) {
      element.style.display = "none";
    } else {
      element.style.display = "table-row";
    }
  });
});
