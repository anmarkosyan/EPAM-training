'use strict';

//======================== 🔴loops: while, do ... while, for, sw
//📍while loop
// let x = 0;
// while (x < 10) {
//   let y = x + 1;
//   x++;
// }
//console.log(x);// 10

// let x = 10;
// while (x > 5) {
//   let y = x * x;
//   x += 2;
// }
// console.log(x);//infinity

// let i = 3;
// while (i <= 10) {
//   let z = i++;
//   i += 2;
// }
// console.log(i);//12;

// const quotientAndRemainder = function (n, k) {
//   let quotient = 0;
//   let reminder;
//   while (n >= k) {
//     n = n - k;
//     quotient++;
//   }
//   reminder = n;
//   return [quotient, reminder];
// };
// console.log(quotientAndRemainder(5, 5));// [1, 0];
// console.log(quotientAndRemainder(5, 2));//  [2, 1];
// console.log(quotientAndRemainder(12, 5));// [2, 2];
// console.log(quotientAndRemainder(5, 7));//[0, 5].

//====================== 👩🏻‍💻 coding challenge ======================
//1️⃣:
/*
Use switch case to solve following exercise.
Create a vehicleName variable and take value from prompt.
If value is 'car', alert 'Shipping method is land'.
If value is 'ship', alert 'Shipping method is ocean'.
If value is 'airplane', alert 'Shipping method is air'.
And finally, if user entered 'train' or 'tram', alert 'Shipping method is rail'.
In case of other values alert 'What an unusual shipping method!'.

You can just alert once after switch case by assigning above paragraphs to another variable.
*/

//1️⃣:
// const vehicleName = prompt('Please, enter the type of vehicle  for delivery!', '');
// //1way
// let alertMessage;
//
// switch (vehicleName) {
//   case '':
//      alertMessage = 'Try again!';
//     break;
//   case 'car':
//     alertMessage = 'Shipping method is land.';
//     break;
//   case 'ship':
//     alertMessage = 'Shipping method is ocean.';
//     break;
//   case 'airplane':
//     alertMessage = 'Shipping method is air.';
//     break;
//   case 'train':
//   case 'tram':
//     alertMessage = 'Shipping method is rail.';
//     break;
//   default:
//     alertMessage = 'What an unusual shipping method!';
// }
// alert(alertMessage);
//
// //2 way
// const userAlert = function (name) {
//   let alertMessage;
//   switch (name) {
//     case '':
//       alertMessage = 'Try again!';
//       break;
//     case 'car':
//       alertMessage = 'Shipping method is land.';
//       break;
//     case 'ship':
//       alertMessage = 'Shipping method is ocean.';
//       break;
//     case 'airplane':
//       alertMessage = 'Shipping method is air.';
//       break;
//     case 'train':
//     case 'tram':
//       alertMessage = 'Shipping method is rail.';
//       break;
//     default:
//       alertMessage = 'What an unusual shipping method!';
//   }
//   return alert(alertMessage);
// };
//
// userAlert(vehicleName);

//2️⃣:
/*
Using for loop, ask user to type number in the prompt window 5 times, and alert the total of the numbers. 
Calculate only odd numbers.
If user enters invalid number, stop the loop and alert 'Invalid number was entered. Current total is ${sum}',
where sum is previous odd numbers total.
In case of all the numbers are valid, need to alert once after for loop
 */

let sum = 0;
for (let i = 1; i <= 5; i++) {
  let userInput = +prompt('Enter random number  calculation of odd numbers!');

  if (userInput % 2 !== 0) {
    sum += userInput;
  } else {
    break;
  }

}

alert(!sum ? 'Try again!' : sum ? sum : `Invalid number was entered. Current total is ${sum}`);
