'use strict';
//===================== 🔴 lecture part ===================
//These all create a shallow copy; top-level elements containing primitive values are copied,
// but if the array contains nested objects or arrays,
// those will reference elements in the original array.
const a = [1, 2, 34];
const b = a;
console.log(a === b);//true
const c = [...a];
console.log(c === a);//false
const d = a.slice();
console.log(d === a);//false
const e = Array.from(a);
console.log(e, e === a);// false

//✔ sort method
const unsortedArr = [2, 1, 6, 3, 9, 2, 10];
const sortedByUTF = unsortedArr.sort();
const ascending = unsortedArr.sort((a, b) => a - b);
const descending = unsortedArr.sort((a, b) => b - a);

console.log(sortedByUTF);//convert into string by UTF-16 code
console.log(ascending);// right ascending order
console.log(descending);// right descending order

/*
const x = [2, 3, 4];
//1️⃣ unshift
const unshift = function (arr, val) {
  let i = arr.length - 1;
  while (i >= 0) {
    arr[i + 1] = arr[i];
    i--;
  }
  arr[0] = val;
};
unshift(x, 1);
console.log(x); //[1, 2, 3, 4]

//2️⃣ shift
const shift = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
};
shift(x);
console.log(x); //[2, 3, 4]

//3️⃣ push
const push = function (arr, val) {
  arr[arr.length] = val;
};
push(x, 5);
console.log(x); //[2, 3, 4, 5]

//4️⃣ pop
const pop = function (arr) {
  arr.length = arr.length - 1;
};
pop(x);
console.log(x);
*/

//5️⃣ map
// const users = [
//   { id: 1, firstName: 'Tony', lastName: 'Stark', age: 45, employee: true },
//   { id: 2, firstName: 'Steve', lastName: 'Strange', age: 40, employee: true },
//   { id: 3, firstName: 'Bruce', lastName: 'banner', age: 35, employee: false },
//   { id: 4, firstName: 'Steve', lastName: 'Rogers', age: 73, employee: false },
//   { id: 5, firstName: 'Sia', lastName: 'Yung', age: 33, employee: true },
//   { id: 6, firstName: 'Jonas', lastName: 'Marker', age: 23, employee: true },
//   { id: 7, firstName: null, lastName: null },
// ];
// //using map method
// // const myMap = users.map(function (user) {
// //   return user.id && user.firstName && user.lastName ? { id: user.id, fullName: `${user.firstName} ${user.lastName}` } : { userStatus: 'no found' };
// // });
// //  console.log(myMap);
//
// //manually
// Array.prototype.myMap = function () {
//   const arr = this;
//   const newArr = [];
//
//   //first way
//   // for (const user of arr) {
//   //   if (user.id && user.firstName && user.lastName) {
//   //     newArr.push({ id: user.id, fullName: `${user.firstName} ${user.lastName}` });
//   //   } else {
//   //     newArr.push({ userStatus: 'no found' });
//   //   }
//   // }
//   //
//   // return newArr;
//
//   //second way
//   arr.reduce(function (acc, user) {
//     if (user.id && user.firstName && user.lastName) {
//       acc.id = user.id;
//       acc.fullName = `${user.firstName} ${user.lastName}`;
//       newArr.push({ id: acc.id, fullName: acc.fullName });
//     } else {
//       acc.userStatuse = 'notfound';
//       newArr.push({ userStatus: acc.userStatuse });
//     }
//
//     return acc;
//   }, {});
//
//   return newArr;
// };
// console.log(users.myMap());

//====================== 👩🏻‍💻 coding challenge =============
//implement `map` and `filter` methods manually,

//1️⃣ map
// const users = [
//   { id: 1, firstName: 'Tony', lastName: 'Stark', age: 50, employee: true },
//   { id: 2, firstName: 'Steve', lastName: 'Strange', age: 40, employee: true },
//   { id: 3, firstName: 'Bruce', lastName: 'Banner', age: 65, employee: false },
//   { id: 4, firstName: 'Steve', lastName: 'Rogers', age: 73, employee: false },
//   { id: 5, firstName: 'Sia', lastName: 'Yung', age: 33, employee: true },
//   { id: 6, firstName: 'Jonas', lastName: 'Marker', age: 23, employee: true },
//   { id: 7, firstName: null, lastName: null },
// ];
//===============
// const usingReduce = function (usersData) {
//   const newArr = [];
//   usersData.reduce(function (acc, user) {
//     if (user.id && user.firstName && user.lastName) {
//       acc.id = user.id;
//       acc.fullName = `${user.firstName} ${user.lastName}`;
//       newArr.push({ id: acc.id, fullName: acc.fullName });
//     } else {
//       acc.userStatuse = 'notfound';
//       newArr.push({ userStatus: acc.userStatuse });
//     }
//
//     return acc;
//   }, {});
//
//   return newArr;
// };
// console.log(usingReduce(users));
//===================
// Array.prototype.myMap = function (fnc) {
//   const arr = this;
//   const newArr = [];
//
//   for (const user of arr) {
//     newArr.push(fnc(user));
//   }
//   return newArr;
// };
//
// const callbackFnc = function (el) {
//   if (el.id && el.firstName && el.lastName) {
//     return { id: el.id, fullName: `${el.firstName} ${el.lastName}` };
//   } else {
//     return { userStatus: 'no found' };
//   }
// };
//
// console.log(users.myMap(callbackFnc));

//2️⃣ filter
//const arr = [23, 4, 2, 3, 23, 2, 56, 4, 7];
//===================
// const dupRem = arr.filter(function(num){
//   return  arr.indexOf(num) === arr.lastIndexOf(num)
// })
//console.log(dupRem); //[3, 56, 7]
//==================
//using only reduce for creating new array of unique numbers
// const usingReduceForFilter = function (numbersArr) {
//   return numbersArr.reduce(function (acc, num, _, arr) {
//     if (arr.indexOf(num) === arr.lastIndexOf(num)) {
//       acc.push(num);
//     }
//
//     return acc;
//   }, []);
// };
// console.log(usingReduceForFilter(arr));
//===================
// Array.prototype.myFilter = function (fnc) {
//   const arr = this;
//   const duplicateRemovedArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (fnc(arr[i], arr)) {
//       duplicateRemovedArr.push(arr[i]);
//     }
//   }
//
//   return duplicateRemovedArr;
// };
//
// const callbackFunction = function (el, currentArr) {
//   return currentArr.indexOf(el) === currentArr.lastIndexOf(el);
// };
//
// console.log(arr.myFilter(callbackFunction));

//============== problem with reduce ======
//const arr = [1, 2, 3, 5, 7, 4, 23, 56, 4];
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

