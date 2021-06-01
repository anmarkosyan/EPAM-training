'use strict';
//=================== 🔴 lecture part ===================
//1️⃣ a bit about arrow functions
/*
❗️Do not have this
❗️Do not have arguments
❗️Can’t be called with new
❗️They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance
*/

// const arrow = () => ({name: 'Anush'});// with ()
//console.log(arrow());
//=================== 🔴 coding challenges =============
//1️⃣
/*
 * Create a function that takes an argument (like last name) and returns this.name + last name.
 * Create an object that has a name property, then use call,
 * apply and bind to create 3 new functions that will return the first name from the object + as an argument given the last name.
 * */
// const userFullName = function (lastName) {
//   return `${this.name} ${lastName}`;
// };
//
// const obj = {
//   name: 'Aram',
// };
//
// const [user1, user2, user3] = ['Markosyan', 'Qeshishyan', 'Poghosyan'];
//
// console.log(userFullName.bind(obj, user1)());
// console.log(userFullName.call(obj, user2));
// console.log(userFullName.apply(obj, [user3]));
//2way
// const userFullName = function (lastName) {
//   return `${this.name} ${lastName}`;
// };
//
// const [user1, user2, user3] = [
//   { name: 'Aram', secondName: 'Markosyan' },
//   { name: 'Tigran', secondName: 'Keshishyan' },
//   { name: 'Khachik', secondName: 'Avagyan' },
// ];
//
// console.log(userFullName.bind(user1, user1.secondName)());
// console.log(userFullName.call(user2, user2.secondName));
// console.log(userFullName.apply(user3, [user3.secondName]));

//======
const add = (n) => (n + 10);
//console.log('Simple call', add(3));
// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    //console.log(args)
    let n = args[0];  // just taking one argument here
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3, 4, 5));  // calculated
console.log(memoizedAdd(3));  // cached
console.log(memoizedAdd(4));  // calculated
console.log(memoizedAdd(4));  // cached