//'use strict';
//======================== 🔴 Lecture Part =======================
//1️⃣ Execution Context

//2️⃣ Hoisting

//======================= 👩🏻‍💻 Coding Part =======================
// if (true) {
//   function fn() {
//     return 10;
//   }
// } else {
//   function fn() {
//     return 20;
//   }
// }
// console.log(fn());
//======
// console.log(
//   (function (x) {
//     var x = 1 + x;
//     return x;
//   })(1)
// ); //2
//===
//function f25() {
  // (function () {
  //   var x55 = 82;
  //   console.log(x55);//82
  // })();
//   var x55 = 91;
//   if (x55) {
//     (function () {
//       var x55 = 82;
//       console.log(x55); //82
//     })();
//     console.log(x55); //91
//   }
//   console.log(x55); //91
// }
// f25();

//=====
// function f28() {
//   // (function () {
//   //    var x56 = 83;
//   //   console.log(x56);//83
//   // })();
//   var x56 = 94;
//   if (false) {
//     (function () {
//       var x56 = 83;
//       console.log(x56); //83
//     })();
//
//     console.log(x56); //94
//   }
//   console.log(x56); //94
// }
// f28(); //94

//======
// function hn() {
//   x++;
//   console.log(x);
//   return function hn() {
//     x += 10;
//     console.log(x);
//   };
// }

// var x = 0;
// function hn() {
//   x++; //1
//   console.log(x); //1
//   return function hn() {
//     x += 10;
//     console.log(x); //11
//   };
// }
// hn(hn())(hn());

//===
// function hoistingExample() {
//   console.log('Value of a in local scope: ', a);
// }
// console.log('Value of a in global scope: ', a);
// var a = 1;
// hoistingExample();

//=======
// console.log(a());
// function a() {
//
//   var b = function() {
//     return 3;
//   };
//   return b();
//    function b() {
//     return 8;
//   }
//
// }
//=====
// function fc() {
//   if(true) {
//     function sum(){
//       return 5;
//     }
//   } else {
//     function sum() {
//       return 10
//     }
//   }
//   return sum();
// }
// console.log( fc());
//=====
// if(false) {
//   function sum(){
//     return 5;
//   }
// } else {
//   function sum() {
//     return 10
//   }
// }
// console.log(sum());
//=====
// function fc() {
//   function x() {
//     return 10;
//   }
//   console.log('1', x)
//   console.log('2', x)
//   var x = 5;
//   console.log('3', x)
//   return x;
// }
// console.log(fc())


