// let student = {
//   name: "Aqil",
//   surname: "Necefov",
// };

// console.log(student.name);
// console.log(student.surname);
// console.log(student);

// let teacher = {
//   name: "Filankes",
//   surname: "Filankesov",
//   age: 12,
//   isDeveloper: false,
//   for: 144,
//   if: "55",
//   "1ciDonemNotu": "33",
//   "ikinci-donem-notu": 99,
// };

// console.log(teacher["for"]);
// console.log(teacher.for);
// console.log(teacher["1ciDonemNotu"]);
// console.log(teacher["ikinci-donem-notu"]);

// let teacher = {
//   name: "Filankes",
//   teach: function () {
//     console.log("Teaching");
//   },
//   write: () => {
//     console.log("Writing");
//   },
// };
// teacher.teach();
// teacher.write();

// let student = {
//   name: "Mahmud",
//   age: 22,
//   isPrime: false,
// };

// console.log(student);
// student.name = "Ehmed";
// delete student.isPrime;
// console.log("isPrime" in student);
// console.log(student);
// for (let key in student) {
//   console.log(key);
//   console.log(student[key]);
// }

// let studentA = {
//   name: "Mahmud",
//   age: 22,
// };
// let studentB = studentA;
// studentB.name = "Nicat";
// console.log(studentA.name);

// let car = {
//   name: "Audi",
//   age: 12,
//   owner: {
//     name: "Suleumna",
//     age: 22,
//   },
// };
// console.log(car.owner.name);

// let car = {
//   name: "Audi",
//   age: 12,
//   owner: null,
// };

// if (car.owner) {
//   console.log(car.owner.name); // undefined.name
// }

// let car = null;

// console.log(car?.owner?.name);

// let animal = {
//   name: "Mike",
//   type: "Dog",
//   model: "Pitbull",
// };

// console.log(Object.keys(animal));
// console.log(Object.values(animal));

// let animals = [
//   { name: "Mike", type: "Dog" },
//   { name: "Tom", type: "Cat" },
//   { name: "Cerry", type: "Mouse" },
// ];
// console.log(animals);

// let teacher = {
//   name: "Suleyman",
//   age: 22,
//   students: [
//     {
//       name: "Yunis",
//       age: 14,

//     },
//     {
//       name: "Mahmud",
//       age: 7,
//     },
//   ],
// };

// for (let i = 0; i < teacher.students.length; i++) {
//   console.log(teacher.students[i].name);
// }

// ? :
// let a = 12;
// let b = 12;

// if (a > b) {
//   console.log("A boyukdur");
// } else if (a < b) {
//   console.log("B boyukdur");
// } else {
//   console.log("Beraberdir");
// }

// console.log(a > b ? "A boyukdur" : a < b ? "B boyukdur" : "Beraberdir");

// let a = "asd";

// console.log(!!a);
// Nullish operator
// let student = {
//   name: "Medine",
//   money: 0,
// };

// console.log(student.money || "Odenis tapilmadi");
// console.log(student.money ?? "Odenis tapilmadi");
