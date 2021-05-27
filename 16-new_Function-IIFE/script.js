'use strict';

//================= 🔴 coding challenges ==============
//1️⃣
// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // 0
//   })(1);
// })(0);
//
// //2️⃣
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // 1
//   }
//   console.log(count); // 0
// })();

//3️⃣
// var i = 0;
// for (; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // 3 3 3
//   }, 1000);
// }

//4️⃣
// for (var i = 0; i < array.length; i++) {
//   (function (num) {
//     setTimeout(function () {
//       console.log(`Element: ${arr[num]}, at index:  ${num}`);
//     }, 1000);
//   })(i);
// }



