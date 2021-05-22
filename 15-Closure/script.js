'use strict';
//====================== 🔴 closures ===================
//1️⃣
// const calc = function () {
//   let num = 0;
//
//   return function count() {
//     return num++ * 2;
//   };
// };
// const multi = calc();
// console.log(multi());
// console.log(multi());
// console.log(multi());
// console.log(multi());

//2️⃣
const arr = [5, 11, 18, 25];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log('Element: ' + arr[i] + ', at index: ' + i);
//   }, 3000);
// }
// Element: undefined, at index: 4
// Element: undefined, at index: 4
// Element: undefined, at index: 4
// Element: undefined, at index: 4
//correct the output
//1way
//  for(let i = 0; i < arr.length; i++){
//    setTimeout(function(){
//      console.log(`Element: ${arr[i]}, at index:  ${i}`);
//    }, 3000)
//
//  }
// Element: 5, at index:  0
// Element: 11, at index:  1
// Element: 18, at index:  2
// Element: 25, at index:  3
//2way: using closure
const array = [5, 11, 18, 25];
// for (var i = 0; i < array.length; i++) {
//   setTimeout(
//     (function (local_i) {
//       return function () {
//         console.log(`Element: ${arr[i]}, at index:  ${i}`);
//       };
//     })(i),
//     1000
//   );
// }
//IIFE
// for (var i = 0; i < array.length; i++) {
//   (function (num) {
//     setTimeout(function () {
//       console.log(`Element: ${arr[num]}, at index:  ${num}`);
//     }, 1000);
//   })(i);
// }
//arbitrary curly brackets
for (var i = 0; i < array.length; i++) {
  {
    let j = i;
    setTimeout(function () {
      console.log(`Element: ${arr[j]}, at index:  ${j}`);
    }, 1000);
  }
}

//3️⃣

//======================= 🔴 about this ====================
// var person = {
//   name: 'Dave',
//   weight: 100,
//   height: 180,
//   calculateBMI: function () {
//     console.log(this); // this object
//     //const self = this;
//     function innerFunction() {
//       console.log(this); //undefined
//     }
//     innerFunction();
//   },
// };
// person.calculateBMI();
