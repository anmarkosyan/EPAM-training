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

// const curry = {
//   fName: "Steph",
//   lName:"Curry",
//   number:30,
//   team:"Warriors",
//   college:"Davidson"};
//
// function getCollege(player){
//   return player.college;
//
// }
//
// console.log(getCollege(curry));

//🏋🏻
/*‍♀️
function NBAPlayer(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}

const iverson = new NBAPlayer("Iverson", "76ers", 11.2);
const jordan = new NBAPlayer("Jordan", "bulls", 20.2);


const sumPPG = function(player1, player2){
  return player1.ppg + player2.ppg

};

console.log(sumPPG(iverson, jordan));// => 31.4
 */

//🏋🏻‍♀️
/*
function countLetters(str) {
  const newStr = str.toLowerCase();
  // const obj = {};
  // for (const el of newStr) {
  //   if (el !== ' ' && !obj[el]) {
  //     obj[el] = 1;
  //   } else if (obj[el]) {
  //     obj[el]++;
  //   }
  // }
  //
  // return obj;

  return [...newStr].reduce(function(acc, el){
    if(el !== ' ' && !acc[el]) {
          acc[el] = 1;
        } else if (acc[el]) {
          acc[el]++;
        }
    return acc;
  }, {})
}

console.log(countLetters('school')); //{s: 1, c: 1, h: 1, o: 2, l: 1}
console.log(countLetters('I like milk')); //{i: 3, l: 2, k: 2, e: 1, m: 1}
 */

//🏋🏻‍♀️
// function countWords(str) {
//   const lowerStr = str.toLowerCase();
//   return lowerStr.split(' ').reduce(function (acc, word) {
//     if (!acc[word]) acc[word] = 1;
//     else acc[word]++;
//     return acc;
//   }, {});
// }
//
// console.log(countWords('A life is a moment')); //{a: 2, life: 1, is: 1, moment: 1}

//🏋🏻‍♀️
function LivingThing(name, race) {
  this.name = name;
  this.race = race;
}
const player = new LivingThing('Gary', 'human');
const plant = new LivingThing('Carrot', 'plant');

const bite = function (thing) {
  // if (thing.race === 'human') thing.race = 'zombie';
  //
  // return thing;

   thing.race === 'human' ? thing.race = 'zombie': thing.race;
   return thing;
};
console.log(bite(player));
console.log(bite(plant));
