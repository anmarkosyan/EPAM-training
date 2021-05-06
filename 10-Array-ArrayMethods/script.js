'use strict';
//===================== 🔴 lecture part ===================
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
// for these implementation please read this simple example in order to understand how you can create custom methods for Array,
// if you don't know what is the prototype, just use it as it is, in future we will learn about
//1️⃣ map
const users = [
  { id: 1, firstName: 'Tony', lastName: 'Stark', age: 45, employee: true },
  { id: 2, firstName: 'Steve', lastName: 'Strange', age: 40, employee: true },
  { id: 3, firstName: 'Bruce', lastName: 'banner', age: 35, employee: false },
  { id: 4, firstName: 'Steve', lastName: 'Rogers', age: 73, employee: false },
  { id: 5, firstName: 'Sia', lastName: 'Yung', age: 33, employee: true },
  { id: 6, firstName: 'Jonas', lastName: 'Marker', age: 23, employee: true },
  { id: 7, firstName: null, lastName: null },
];

Array.prototype.myMap = function () {
  const arr = this;
  const newArr = [];

  //1 way: using forEach method
  arr.forEach(function (user) {
    if (user.id && user.firstName && user.lastName) {
      newArr.push({ id: user.id, fullName: `${user.firstName} ${user.lastName}` });
    } else {
      newArr.push({ userStatus: 'no found' });
    }
  });

  //2 way: with for... of loop
  // for (const user of arr) {
  //   if (user.id && user.firstName && user.lastName) {
  //     newArr.push({ id: user.id, fullName: `${user.firstName} ${user.lastName}` });
  //   } else {
  //     newArr.push({ userStatus: 'no found' });
  //   }
  // }
  //
  // return newArr;

  //3 way: with reduce()
  // arr.reduce(function (acc, user) {
  //   if (user.id && user.firstName && user.lastName) {
  //     acc.id = user.id;
  //     acc.fullName = `${user.firstName} ${user.lastName}`;
  //
  //     newArr.push({ id: acc.id, fullName: acc.fullName });
  //   } else {
  //     acc.userStatuse = 'notfound';
  //
  //     newArr.push({ userStatus: acc.userStatuse });
  //   }
  //
  //   return acc;
  //}, {});

  return newArr;
};
console.log(users.myMap());

//2️⃣ filter

