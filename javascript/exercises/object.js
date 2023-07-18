// function isEmpty(obj) {
//   return !Object.keys(obj).length;
// }

// console.log(isEmpty({ name: "asd" }));

// let salaries = { John: 100, Ann: 160, Pete: 130 };
// calculateSallary(salaries);

// function calculateSallary(obj) {
//   let sum = 0;
//   let salaryArr = Object.values(obj);

//   salaryArr.forEach((s) => (sum += s));
//   console.warn(sum);
// }

// function calculateSallary(obj) {
//   let sum = 0;
//   let salaryArr = Object.values(obj);
//   console.log(salaryArr.reduce((a, b) => a + b, 0));
// }

// let res = [7, 0, 9].reduce((prev, current) => {
//   return prev + current;
// }, "");

// console.log(res);

// let students = [
//   { name: "Mahmud", grade: 100 },
//   { name: "Nicat", grade: 90 },
//   { name: "Ferid", grade: 45 },
// ];

// let res = students.reduce((prev, current) => {
//   return prev + current.name + ", ";
// }, "");

// console.log(res);

// let message;
// let login = "asd";

// message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Director"
//     ? "Greetings"
//     : login === ""
//     ? "No Login"
//     : "";

// console.log(message);

// function count(obj) {
//   return Object.keys(obj).length;
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];
// // let names = users.map((item) => item.name).join(", ");
// let names = users.reduce((prev, current) => `${prev} ${current.name},`, "");
// console.log(names); // John, Pete, Mary

let student = {
  name: "Suleyman",
  surname: "Dadashow",
  age: 12,
  title: "teacher",
  exprience: 0,
  isNew: false,
};
console.log(func(student)); // => ["name", "surname", "title"];

function func(obj) {
  return Object.keys(obj).filter((key) => typeof obj[key] === "string");
}
