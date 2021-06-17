'use script';
//======================= 🔴 EPAM coding challenge ===================
/*1️⃣
* 1.Given a string, reverse each word in the sentence
For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
* */

//const reverseWords = function (str) {
//1way
// const arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//   let str = '';
//   for (let j = 0; j < arr[i].length; j++) {
//     str = arr[i][j] + str;
//   }
//
//   arr[i] = str;
// }
// return arr.join(' ');

//2way
// const arr1 = str.split(' ');
// arr1.forEach((el, i) => {
//   arr1[i] = el.split('').reverse().join('');
// });
//
// return arr1.join('');

//3way
//   const arr2 = str.split(' ');
//   return [...arr2].map(el => el.split('').reverse().join('')).join(' ');
// };
//
// console.log(reverseWords('Welcome to this Javascript Guide!')); //emocleW ot siht tpircsavaJ !ediuG

/*2️⃣
 How to empty an array in JavaScript?
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
How could we empty the array above? (Provide min 2 solutions)
*/
//var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
// arrayList.length  = 0;
// console.log(arrayList);

//2way
//console.log((arrayList = []));

//3️⃣
/* How would you check if a number is an integer?
Write a function without using Number.isInteger
*/

// const isInteger = function (num) {
//   return num % 1 === 0 ? `${num} is an integer` : `${num} is an floating point number`;
// };
// console.log(isInteger(123));
// console.log(isInteger(12.5));

//4️⃣
/*
Make this work
duplicate([1, 2, 3, 4, 5]);  // [1,2,3,4,5,1,2,3,4,5]
*/
//const duplicate = function (arr) {
//return [...arr, ...arr];
//return arr.concat(arr);
// const doubleArr = [];
// let i = 1;
// while (i <= 2) {
//   doubleArr.push(...arr);
//   i++;
// }
//   return doubleArr;
// };
//
// console.log(duplicate([1, 2, 3, 4, 5])); // [1,2,3,4,5,1,2,3,4,5]);

//5️⃣
/*
Write a "mul" function which will properly when invoked as below syntax
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
*/

// const mul = function (a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// };
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); //output : 48

//6️⃣
/*
* Write a function that would allow you to do this?
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
* */

// const createBase = function (num) {
//   return function (x) {
//     return num + x;
//   };
// };
// var addSix = createBase(6);
// console.log(addSix(10)); // returns 16
// console.log(addSix(21)); // returns 27

//7️⃣
// What will the following code output to the console and why:
// var hero = {
//   _name: 'John Doe',
//   getSecretIdentity: function () {
//     return this._name;
//   },
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
//here we should call the function and store the result into variable, because if after call it will be
// calling like regular function, not a method, so like this will show window obj, so there couldn't find the _name property
//console.log(stoleSecretIdentity.call(hero));
//console.log(hero.getSecretIdentity());
//What is the issue with this code and how can it be fixed.*/

//8️⃣
//What is the meaning of life the universe and everything?
//Life is for challenge yourself, and become  stronger
