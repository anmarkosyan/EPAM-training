'use strict';
//=================== 🔴 lecture part =======================
//1️⃣ iteration for iterables
//array
//string
//Set
//Map
/*
//✅ object
const obj = { one: 1, two: 2 }; //❗️object is not iterable
for (const key in obj) console.log(key); // => one, two
//❗️for(const value of obj) console.log(value); // =>❗️ TypeError: range is not iterable
for (const key of Object.keys(obj)) console.log(key); // => one, two
for (const value of Object.values(obj)) console.log(value); // => 1, 2
for (const [key, value] of Object.entries(obj)) console.log(key, value); // => one 1, two 2,

const obj1 = { one: { integer: 1, decimal: 1.0 } };
for (const [key, value] of Object.entries(obj1)) console.log(key, value); //one { integer: 1, decimal: 1 }
for (const [key, { integer, decimal }] of Object.entries(obj1)) console.log(key, integer, decimal); //one 1 1
//✅ array
const arr = [1, 2, 3];
for (const index in arr) console.log(index); // 0, 1, 2
for (const el of arr) console.log(el); //1, 2, 3
for (const [index, el] of arr.entries()) console.log(index, el); //0 1, 1 2, 2 3,
//✅ string
const str = 'hello';
for (const index in str) console.log(index); //0, 1, 2, 3, 4
for (const el of str) console.log(el); //h, e, l, l, o
//✅ new Set()
const set = new Set([1, 2, 3, 2, 4, 1]);
const set1 = new Set('abcdc');
const setObj = { name: 'Ush' };
console.log(set1); //Set { 'a', 'b', 'c', 'd' }
console.log(set); //Set { 1, 2, 3, 4 }
console.log(set.add(setObj)); //Set { 1, 2, 3, 4, { name: 'Ush' } }
for (const el of set1) console.log(el); // a, b, c, d
set.forEach(function (el, elAgain, set) {
  console.log(el, elAgain, set); //1, 2, 3, 4
});
 */
//✅ new Map()
// const loopMap = new Map([
//   ['name', 'Anush'],
//   ['age', 34],
//   ['address', 'USA '],
//   ['tell', 123123123],
// ]);
// console.log(loopMap);
//
// for (const el of loopMap) console.log(el);
// for (const key of loopMap.keys()) console.log(key);
// for (const value of loopMap.values()) console.log(value);
// for (const [key, value] of loopMap.entries()) console.log(key, value);
// loopMap.forEach(function (value, key, map) {
//   console.log(key, value, map);
// });

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
// const restaurant = new Map();
// restaurant
//   .set('name', 'Mayrig')
//   .set(1, 'Sayat-Nova')
//   .set(2, 'Amiryan')
//   .set('open', 11)
//   .set('close', 22)
//   .set(true, 'we are open')
//   .set(false, 'we are closed')
//   .set([], '');
//
// const currTime = 22;
// const msg = restaurant.get(currTime > restaurant.get('open') && currTime < restaurant.get('close'));
//
// console.log(msg);

// //map.has()
// //map.delete()
// //map.size()
// //map.clear()
// //map.entries()
// //map.keys()
// //map.values()

//Example:
// const map = new Map([
//   ['some key', 'some value'],
//   ['asdasd', 'asdasd'],
// ]);
// console.log(map);
// console.log(map.entries());
// const obj = Object.fromEntries(map.entries());
// console.log(obj);
// const map2 = new Map(Object.entries(obj));
// console.log(map2);

//4️⃣ new Set()
// const ordersSet = new Set(['hi', 'hi', 'hello', 'hello']);
//
// console.log(ordersSet); //Set { 'hi', 'hello' }
// console.log(ordersSet.size); // 2
// console.log(ordersSet.has('hi')); // true => like includes() method
// console.log(ordersSet.add('there')); //{ 'hi', 'hello', 'there' }
// console.log(ordersSet.delete('hi')); //true
// console.log(ordersSet.entries()); // { [hello, hello], [there, there]}
// //console.log(ordersSet.clear());{}
//
// // Example with array added in Set after converted to array
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
//
// const uniquePosition = new Set(staff); //{''...}
// console.log([...uniquePosition]); //[...]
// //or
// console.log([...new Set(staff)]); //[...]

//5️⃣ WeakMap() / WeakSet()
/*
let obj = {
  name: 'Jonas',
};
const set = new Set();
set.add(obj);
obj = null;

console.log(set);
//====================
const MAX1 = 10;
const map1 = new Map();

for (let i = 0; i <= MAX1; i++) {
  const key = { index: i };
  map1.set(key, i);
}

console.log('DONE');
console.log(map1);

//====
const MAX = 10;
const map = new WeakMap();

for (let i = 0; i <= MAX; i++) {
  const key = { index: i };
  map.set(key, i);
  console.log(map);
}
console.log(map);
console.log('DONE');
//console.log(map);
 */
//==================== 👩🏻‍💻 coding challenge ================
//🏋🏻‍♀️Set
//Create a function unique(arr) that should return an array with unique items of arr.
// function unique(arr) {
//   return [...new Set(arr)];
//   //return Array.from(new Set(arr))
// }
//
// const values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];
//
// console.log(unique(values)); //[ 'Hare', 'Krishna', ':-O' ]
//
// //***************************************************************
// //🏋🏻‍Map♀️
// //Write a function aclean(arr) that returns an array cleaned from anagrams.
// const arrAnagram = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
// function aclean(arr) {
//   const map = new Map();
//
//   for (const el of arr) {
//     const orderingName = el.toLowerCase().split('').sort().join('');
//     map.set(orderingName, el);
//   }
//
//   return [...map.values()];
//   //return Array.from(map.values());
// }
//
// console.log(aclean(arrAnagram));
//=====================
//🏋🏻‍♀️add one to number

const increaseNumsByOne = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i]++;
    if (arr[i] <= 9) {
      return arr;
    } else if (arr[i - 1]) {
      arr[i] = 0;
    } else if (arr[i] > 9) {
      arr[i] = 1;
      arr.push(0);
    }
  }
  return arr;
};
console.log(increaseNumsByOne([1])); //[2] => 1 + 1
console.log(increaseNumsByOne([1, 2, 3])); //+ 1 => 123 + 1 = [1, 2, 4]
console.log(increaseNumsByOne([2, 9, 9])); // [3, 0, 0]
console.log(increaseNumsByOne([8, 9])); // [9, 0]
console.log(increaseNumsByOne([7, 9, 5])); //[7, 9, 6]
console.log(increaseNumsByOne([9])); //[1, 0]


