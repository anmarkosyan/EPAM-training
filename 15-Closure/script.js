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
//const arr = [5, 11, 18, 25];
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
//const array = [5, 11, 18, 25];
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
// for (var i = 0; i < array.length; i++) {
//   {
//     let j = i;
//     setTimeout(function () {
//       console.log(`Element: ${arr[j]}, at index:  ${j}`);
//     }, 1000);
//   }
// }

//3️⃣
// function add() {
//   let count = 0;
//   return function x() {
//     return count++;
//   };
// }
// const res = add();
// console.log(res());
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  //let message = `Count is ${count}`; => will take count = 0;
  function log() {
    let message = `Count is ${count}`; //=> solving the problem count = 3
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); //Count is 0

//4️⃣
function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5

stack.items; // => [10]
//stack.items = [10, 100, 1000]; // Encapsulation broken!
console.log(stack.items); //=> undefined

//5️⃣
function multiply(num1, num2) {
  if (!num2) {
    return function multi(num) {
      return num * num1;
    };
  }
  return num1 * num2;
}

console.log(multiply(4, 5)); // => 20
console.log(multiply(3, 3)); // => 9

const double = multiply(2);
console.log(double(5));  // => 10
console.log(double(11)); // => 22


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
