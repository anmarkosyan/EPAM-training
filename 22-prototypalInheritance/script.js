'use strict';
//================== 🔴 lecture part =====================
//1️⃣ accessing prototype using __proto__ refer
/*
const obj = {
  name: 'anush',
};

console.log(obj.__proto__ === Object.prototype);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

const str = 'abra';
console.log(Object.values(str));
console.log(str.hasOwnProperty('a'));
console.log(str.__proto__.__proto__ === Object.prototype);
 */

//2️⃣ Factory function vs function constructor
//factory function which return  new object
function person(firstName, lastName, age) {
  const person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;
  return person;
}
const mike = new person('mike', 'grand', 23);
console.log(mike); //{firstName: "mike", lastName: "grand", age: 23}\
console.log(mike.__proto__); //[Object: null prototype] {}
console.log(mike.__proto__ === person.prototype); //false
console.log(mike.__proto__ === Object.prototype); //true

//constructor function
console.log('===== constructors ======');
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const mike2 = new Person('mike', 'grand', 23);
const alen = Person('alen', 'mark', 34);
console.log(alen); //undefined

console.log(mike2);
console.log(mike2.__proto__ === Person.prototype); //true
console.log(mike2.__proto__.__proto__ === Object.prototype); //true

//================== 🔴 coding challenges ================
//1️⃣ map implementation
// const users = ['anush', ' markosyan'].map((num, i, thisArg)=>{});
//
// Array.prototype.newMap = function (callback) {
//   const userArr = this;
//   const newArr = [];
//   for (let i = 0; i < userArr.length; i++) {
//     newArr.push(callback(userArr[i], i, this));
//   }
//
//   return newArr;
// };
//
// const callback = function (el) {
//   return `${el.toUpperCase()}`;
// };
//
//  console.log(users.newMap(callback));

//2️⃣ reduce implementation
/*
const str = 'abrakatabra';

Array.prototype.newReduce = function (callFnc, acc) {
  const arr = this;
  let totalRes = acc;

  for (let i = 0; i < arr.length; i++) {
    totalRes = callFnc(totalRes, arr[i], i, arr);
  }
  return totalRes;
};

const callbackFnc = function callbackFnc(acc, el) {
  acc[el] ? acc[el]++ : (acc[el] = 1);
  return acc;
};

console.log([...str].newReduce(callbackFnc, {}));
 */
