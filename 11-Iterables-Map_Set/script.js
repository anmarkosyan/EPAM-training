'use strict';
//=================== 🔴 lecture part =======================
//1️⃣ iteration for iterables
//array
//string
//Set
//Map
//✅ object
/*
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
set.forEach(function (el) {
  console.log(el); //1, 2, 3, 4
});
//✅ new Map()
const map = new Map();
console.log(map);
 */
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
const restaurant = new Map();
restaurant
  .set('name', 'Mayrig')
  .set(1, 'Sayat-Nova')
  .set(2, 'Amiryan')
  .set('open', 11)
  .set('close', 22)
  .set(true, 'we are open')
  .set(false, 'we are closed')
  .set([], '');

const currTime = 22;
const msg = restaurant.get(currTime > restaurant.get('open') && currTime < restaurant.get('close'));
console.log(msg);


// //map.has()
// //map.delete()
// //map.size()
// //map.clear()
// //map.entries()
// //map.keys()
// //map.values()

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
