'use strict';

//============================== 🔴 Lecture part ============================
//✅ destructuring
const obj = { name: 'Anush', age: 34 };
//❗️console.log(...obj);//TypeError: Found non-callable @@iterator
//❗️console.log(`${...obj}`);//SyntaxError: Unexpected token '...'
const obj1 = { ...obj };
console.log(obj1); //{ name: 'Anush', age: 34}
console.log({ ...obj });

const arr = [1, 2, 3];
console.log(...arr); //1 2 3

const str = 'qwe';
const str1 = [...str];
const str2 = { ...str };
console.log(...str); //q w e
console.log(str1); //['q', 'w', 'e'];
console.log(str2); //{ '0': 'q', '1': 'w', '2': 'e' }

const set = new Set([1, 2, 3, 1, 2]);

console.log(...set); //1 2 3

const map = new Map([
  ['name', 'Aram'],
  ['age', 12],
]);
console.log(...map); //['name', 'Aram'] ['age', 12 ]

//========================= 👩🏻‍💻 coding challenges =========================
//🏋🏻‍♀️
// Number.prototype.plus = function (number) {
//   return this + number;
// };
//
// Number.prototype.minus = function (number) {
//   return this - number;
// };
// console.log((5).plus(3).plus(3).minus(2));

//🏋🏻‍♀️
/*There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
//
// const sumSalaries = function (obj) {
//   let sum = 0;
//   for (const value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
//
//   // return Object.values(obj).reduce(function(acc, num){
//   //   acc += num;
//   //   return acc;
//   // }, 0)
// };
// console.log(sumSalaries(salaries)); //650

//🏋🏻‍♀️
//Write a function count(obj) that returns the number of properties in the object:
// let user = {
//   name: 'John',
//   age: 30,
// };
//
// const count = function (obj) {
//   return Object.keys(obj).length;
// };
//
// console.log(count(user)); // 2

//🏋🏻‍♀️

const curry = {
  fName: "Steph",
  lName:"Curry",
  number:30,
  team:"Warriors",
  college:"Davidson"};

function getCollege(player){
  return player.college;

}

console.log(getCollege(curry));

//🏋🏻‍♀️

