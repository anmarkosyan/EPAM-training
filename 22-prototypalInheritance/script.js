'use strict';
//================== 🔴 lecture part =====================
const obj = {
  name: 'anush',
};

console.log(obj.__proto__ === Object.prototype);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

const str = 'abra';
console.log(Object.values(str));
console.log(str.hasOwnProperty('a'));
console.log(str.__proto__.__proto__ === Object.prototype);

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