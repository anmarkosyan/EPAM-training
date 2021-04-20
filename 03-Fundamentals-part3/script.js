'use strict';

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
const vehicleName = prompt('Please, enter the type of vehicle  for delivery!', '');
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
//   switch (name) {
//     case '':
//       return 'Try again!';
//     case 'car':
//       return 'Shipping method is land.';
//     case 'ship':
//       return 'Shipping method is ocean.';
//     case 'airplane':
//       return 'Shipping method is air.';
//     case 'train':
//     case 'tram':
//       return 'Shipping method is rail.';
//     default:
//       return 'What an unusual shipping method!';
//   }
// };
//
// const resultMessage = userAlert(vehicleName);
// alert(resultMessage);

//2️⃣:
/*
Using for loop, ask user to type number in the prompt window 5 times, and alert the total of the numbers. 
Calculate only odd numbers.
If user enters invalid number, stop the loop and alert 'Invalid number was entered. Current total is ${sum}',
where sum is previous odd numbers total.
In case of all the numbers are valid, need to alert once after for loop
 */

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   let userInput = +prompt('Enter random number  calculation of odd numbers!');
//
//   if (userInput % 2 !== 0) {
//     sum += userInput;
//   } else {
//     break;
//   }
//
// }
//
// alert(!sum ? 'Try again!' : sum ? sum : `Invalid number was entered. Current total is ${sum}`);
