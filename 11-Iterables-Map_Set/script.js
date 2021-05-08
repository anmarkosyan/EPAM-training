'use strict';
//=================== 🔴 lecture part =======================
//1️⃣ iteration for iterables
//array
//string
//Set
//Map

const obj = { one: 1, two: 2 };//❗️object is not iterable
for (const key in obj) console.log(key); // => one, two
//❗️for(const value of obj) console.log(value); // =>❗️ TypeError: range is not iterable
for (const key of Object.keys(obj)) console.log(key); // => one, two
for (const value of Object.values(obj)) console.log(value); // => 1, 2
for (const [key, value] of Object.entries(obj)) console.log(key, value); // => one 1, two 2,

const obj1 = { one: { integer: 1, decimal: 1.0 } };
for (const [key, value] of Object.entries(obj1)) console.log(key, value); //one { integer: 1, decimal: 1 }
for (const [key, { integer, decimal }] of Object.entries(obj1)) console.log(key, integer, decimal); //one 1 1

const arr = [1, 2, 3];
for (const index in arr) console.log(index); // 0, 1, 2
for (const el of arr) console.log(el); //1, 2, 3
for (const [index, el] of arr.entries()) console.log(index, el); //0 1, 1 2, 2 3,

const str = 'hello';
for (const index in str) console.log(index); //0, 1, 2, 3, 4
for (const el of str) console.log(el); //h, e, l, l, o

const set = new Set([1, 2, 3, 2, 4, 1]);
const set1 = new Set('abcdc');
console.log(set1); //Set { 'a', 'b', 'c', 'd' }
console.log(set); //Set { 1, 2, 3, 4 }
for (const el of set1) console.log(el); // a, b, c, d
set.forEach(function (el) {
  console.log(el);//1, 2, 3, 4
});

const map = new Map();
console.log(map);

//2️⃣ [Symbol.iterator] for looping over the object using for...of




// let obj = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },
//   next() {
//     console.log('here');
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   },
// };
// console.log(obj);
// for (const key of obj) {
//   console.log(key);
// }
//
//3️⃣ new Map()
//
// //map.set()
// //map.get()
// //map.has()
// //map.delete()
// //map.size()
// //map.clear()
// //map.entries()
// //map.keys()
// //map.values()

//4️⃣ new Set()
// const set = new Set();
// const obj1 = {
//
// }
// console.log(set.add(obj1));
//***************
// const map = new Map([
//   ['some key', 'some value'],
//   ['asdasd', 'asdasd'],
// ]);
// console.log(map);
// // const obj = Object.fromEntries(map.entries());
// // console.log(obj);
// // const map2 = new Map(Object.entries(obj));
// // console.log(map2);
// console.log(map.entries());
// for (let [key, value] of map.entries()) {
//   console.log(Object.fromEntries(key));
// }

//==================== 👩🏻‍💻 coding challenge ================
// const arr = [1, 2, 3, 5, 7, 4, 23, 56, 4];
//
// const oddAvg = function (numsArr) {
//   //1way:
//   const obj = numsArr.reduce(
//     function (acc, num) {
//       if (num % 2 !== 0) {
//         acc.sum += num;
//         acc.length++;
//       }
//       return acc;
//     },
//     { sum: 0, length: 0 }
//   );
//   return obj.sum / obj.length;
//
//   //2way:
//   // const oddNums = numsArr.filter(el => el % 2 !== 0);
//   // return oddNums.reduce((acc, num) => acc + num, 0) / oddNums.length;
// };
// console.log(oddAvg(arr));
