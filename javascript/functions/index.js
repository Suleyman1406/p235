// function printHello(){
//   console.log("Hello World");
// }

// printHello();

// function printHelloToSomeone(name){
//   console.log("Hello " + name)
// }

// printHelloToSomeone("Kamil");
// printHelloToSomeone("Mahmud")

// function sum(a,b){
//   return a+b;
// }
// let a = sum(2,3);

// console.log("cavab: ", a)

// function any(p1, p2){
//   console.log( 'p1: ', p1);
//   console.log( 'p2: ', p2);
// }

// any(2, 3, 4, 5, 56)

// function sum(a, c=55 ,b = 33 ){
//   console.log("a", a);
//   console.log("b", b);
// }
// sum(1, 5)

// let sum = function(a,b){
//   console.log(`cem: ${a+b}`);
// }

// sum(2,3)

// printHello();

// function printHello(){
//   console.log("Hello world");
// }

// printHello2();

// let printHello2 = function(){
//   console.log("Hello world 2");
// }

// let printHello3 = () => {
//   console.log("Print Hello 3");
// }

// printHello3();

// let sum = (a,b)=>{
//   return a+b;
// }

// console.log(sum(2,3));
// console.log("trial");

// function sayHello() {
//   console.log("Hello");
// }

// function test() {
//   console.log("test");
// }
// // sayHello();

// function any(anyFunction) {
//   console.log("birseyler");
//   anyFunction();
// }

// any(sayHello);
// any(test);

// let sum = (a, b) => {
//   return a + b;
// };

// let multiply = (a, b) => {
//   return a * b;
// };
// let subtract = (a, b) => {
//   return a - b;
// };
// console.log("Start");
// let doOperationAndPrint = (a, b, operation) => {
//   console.log(operation(a, b));
// };
// doOperationAndPrint(6, 3, (a, b) => {
//   let c = a + b;
//   return c;
// });
// doOperationAndPrint(5, 3, subtract);
// doOperationAndPrint(3, 9, multiply);

// let a = [5, 2, 9, 1, 3, 4];

// a.sort((a, b) => a - b);
// a.sort((a, b) => {
//   return a - b;
// });

// a.sort(function (a, b) {
//   return a - b;
// });

// let compare = (a, b) => {
//   return a - b;
// };

// a.sort(compare);

// function compareFn(a, b) {
//   return a - b;
// }

// a.sort(compareFn);

// function any(){

// }

// let ab = function(){

// }

// let abc = ()=>{

// }

let a = [5, 2, 9, 1, 3, 4];

a.sort((a, b) => {
  if (a > b) return 1;
  else if (b > a) return -1;
  else return 0;
});

console.log(a);
