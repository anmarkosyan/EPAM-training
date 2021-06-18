'use strict';
//==================== 🔴 lecture part ================
// function* generatorFnc() {
//   //generator function
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// const generatorObject = generatorFnc(); //will create generator object
// console.log(generatorObject); //Object [Generator] {}
//
// //console.log(generatorObject.next().value);//1 => { value: 1, done: false }
//
// //📍 this is more nicer then next().value
// for (const number of generatorObject) {
//   console.log(number);
// }
//
// //📍 also can do like this
// const iterables = [...generatorFnc()];
// console.log(iterables); //[1, 2, 3]

// const obj = {
//   from: 0,
//   to: 5,
//
//   *[Symbol.iterator]() {
//     for (let i = this.from; i <= this.to; i++) {
//       yield i;
//     }
//   },
// };
//
// console.log([...obj]); //[ 0, 1, 2, 3, 4, 5 ]
//
// for (const number of obj) {
//   console.log(number);
// }

//=================== 🔴 coding challenges ===========
//1️⃣
// function* generator(){
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const objectGenerator = generator();
// console.log(objectGenerator.next());//{ value: 1, done: false }
//========

// function* generator() {
//   for (let i = 1; i <= 5; i++) {
//     yield i;
//   }
// }
// //const iter = [...generator()];
// const iter = generator();
// for (const number of iter) {
//   console.log(number);
// }

//======
// Number.prototype[Symbol.iterator] = function* () {
//   for (let i = 1; i <= this; i++) {
//     yield i;
//   }
// };
// const even = [...5].filter(n => n % 2 === 0);
// console.log(even);
//
// console.log([...5]); //[2, 4]
//
console.log([1, 2, 3][Symbol.iterator]());//Object [Array Iterator] {}
console.log('asdfg'[Symbol.iterator]());//Object [String Iterator] {}
console.log(new Set()[Symbol.iterator]());//[Set Iterator] {  }
console.log(new Map()[Symbol.iterator]());//[Map Entries] {  }

//console.log(123[Symbol.iterator]());//TypeError: 123[Symbol.iterator] is not a function
//console.log({}[Symbol.iterator]());//TypeError: {}[Symbol.iterator] is not a function

// Solution 1:
// Number.prototype[Symbol.iterator] = function*(){
//   for(let i = 0; i <= this; i++) {
//     yield i
//   }
// }
// console.log(...10);
// // Solution 2:
// Number.prototype[Symbol.iterator] = function (){
//   const _this = this;
//   console.log(_this);
//   return {
//     current: 0,
//     next: function (){
//       if (_this > this.current) {
//         this.current++;
//         return { done: false, value: this.current};
//       } else {
//         return { done: true, value: undefined };
//       }
//     }
//   }
// }
// console.log(...10)
// Solution 3:
// Number.prototype[Symbol.iterator] = function (){
//   this.current = 0;
//   return this;
// }
// Number.prototype.next = function (){
//   if (this > this.current) {
//     this.current++;
//     return { done: false, value: this.current};
//   } else {
//     return { done: true, value: undefined };
//   }
// }
// console.log(...10);

//2️⃣ Fibonacci problem
// const fibonacciSeries = function* (n) {
//   let first = 0;
//   let second = 1;
//   yield* [first, second];
//   while (true) {
//     const temp = first;
//     first = second;
//     second = second + temp;
//
//     if(second > n) break;
//     yield second;
//   }
// };
//
// console.log([...fibonacciSeries(10)]);//[0,1,1,2,3,5,8]
// for (const number of fibonacciSeries(25)) {
//   console.log(number);
// }

//3️⃣ Fibonacci problem
// const fibonacciCounter = function* (limit) {
//   let first = 0;
//   let second = 1;
//   let counter = 0;
//   yield* [first, second];
//   while (true) {
//     counter++;
//     const swap = first;
//     first = second;
//     second = second + swap;
//
//     if (counter === limit) break;
//     yield second;
//   }
// };
//
// let str = '';
// for (const strElement of fibonacciCounter(3)) {
//   str += `, ${strElement}`
//
// }
// console.log(str.slice(1));//0, 1, 1, 2,
//
// console.log([...fibonacciCounter(2)]); //[0,1,1]
// console.log([...fibonacciCounter(4)]); //[ 0, 1, 1, 2, 3 ]
// console.log([...fibonacciCounter(12)]);

// const arr = [1, 2, 3, 4];
// console.log(arr);