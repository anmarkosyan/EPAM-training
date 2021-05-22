'use strict';
//======================== 🔴 Lecture Part =======================
//1️⃣ Execution Context

//2️⃣ Hoisting
immaBeOnTop();

var immaBeOnTop;

function immaBeOnTop() {
  console.log('first');
}

immaBeOnTop = function() {
  console.log('second');
};

//=====
foo();

function foo() {
  console.log(1);
}

var foo = function() {
  console.log(2);
};

function foo() {
  console.log(3);
}

foo();
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
//=======
// var a44 = 1;
// console.log(a44); //1
// if (true) {
//   var a44 = 2;
//   console.log(a44); //2
// }
// console.log(a44); //2
//=====
// console.log(
//   (function (x) {
//     var x = 1 + x;
//     return x;
//   })(1)
// );
//======
// const foo = (baz = 9) => {
//   function bar() {
//     return 'HAPPY!';
//   }
//   function baz() {
//     return 'HAPPY!';
//   }
//   var bar;
//   var baz;
//   bar = 8;
//   baz = 'HAPPY!';
//   return [typeof baz, typeof bar];
// };
// console.log(foo()); //
// //======
// const foo = (baz = 9) => {
//   var baz;
//   var bar;
//   var baz;
//   var bar;
//
//   baz = 'happy';
//   bar = function () {
//     return 'HAPPY!';
//   };
//   baz = function () {
//     return 'HAPPY!';
//   };
//   bar = 8;
//
//   console.log('----');
//   // var baz = 'HAPPY!';
//   // var bar =  function () {
//   //   return 'HAPPY!'
//   // }
//   // var baz = function () {
//   //   return 'HAPPY!'
//   // }
//   var bar = 8;
//   return [typeof baz, typeof bar];
// };
// console.log(foo()); //[function, number]
//========
// function a() {
//   function b() {
//     console.log(myVar);
//   }
//   var myVar;
//   myVar = 2;
//   b(); //2
//
//   console.log('-----');
//   // function b (){
//   //   console.log(myVar);
//   // }
//   // var myVar = 2;
//   // b();
// }
// var myVar = 1;
// a(); //2
//
