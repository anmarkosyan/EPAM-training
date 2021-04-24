'use strict';

//========================== 🔴 Functions =========================
//📍One of the most dynamic features of JavaScript is that it has first-class functions,
// meaning that functions are treated like any other first-class object — they can be stored in variables,
// passed around, returned from other functions, and even hold their own properties.

/*
function age() {
  const currYear = 34;
  return year(currYear);
}

age(); //✅ I am 34. => because year function is declaration have hoisting

function year(year) {
  console.log(`I am ${year}.`);
}

//📌 using arrow functions and trying to call before declare it
function age1() {
  const currYear = 33;
  return year1(currYear);
}
//age1();// ❗️ ❗️ReferenceError: Cannot access 'year1' before initialization

const year1 = function (year) {
  console.log(`I am ${year}`);
};

age1(); //I am 33.
 */

//EXP: 2
// Function definition and invocation
function speak(str) {
  console.log(str);
}

speak('Hello'); // Hello

// Store in a variable
const talk = speak;
talk('Hi'); // Hi

// Pass as an argument to a function
// Return from a function
function returner(fnc) {
  return fnc;
}

const chat = returner(talk);
chat('Good morning');//Good morning

// Store in a data structure
const myFunc = [talk];
myFunc[0]('Good afternoon'); //Good afternoon

// Owns properties
talk.myProperty = 'Good night';
console.log(talk.myProperty);//Good night




//======================= 👩🏻‍💻 coding challenge ==================
/*Create function which takes 4 arguments:
passport
ticket
callback in case of success
callback in case of invalid registration

 Create another function as well which checks only passport and ticket (has 2 arguments), and returns boolean.
 Check within first function passenger documents using second function,
 and if they both exists, call first callback, otherwise second callback.
 
 In addition, first callback accepts sit number argument,
 and outputs message about taking place in the appropriate sit (use sit number argument).
 Output error in the second callback.
 You can use function declaration for functions, and arrow function or function declaration for callbacks.
If something is not clear, ask me to clarify it )
*/

//1️⃣ way
// const passengersDetails = {
//   passengerName: prompt('OPTIONAL: \n Please, enter your name.', ''),
//   passportNum: +prompt('Please, enter your passport number!', '0000000000'),
//   ticketCode: +prompt('Please, enter your ticket code!', '000000'),
// };
//
// //the main function
// function passportControl(passenger, successFlight, invalidFlight) {
//   const sitNum = Math.round(Math.random() * 100) + 1;
//
//   if (check(passenger.passportNum, passenger.ticketCode)) {
//     return successFlight(passenger.passengerName, sitNum);
//   }
//   return invalidFlight();
//   // return check(passenger.passportNum, passenger.ticketCode) ? successFlight(passenger.passengerName, sitNum) : invalidFlight();
// }
//
// const check = function (passport, ticket) {
//   return !!(passport && ticket);
// };
//
// const successResult = (name, sitNum) => {
//   //checking if  user name exist or no
//   if (isNaN(+name)) {
//     name = name.toLowerCase();
//     const firstUpper = name[0].toUpperCase() + name.slice(1);
//     alert(`Thank you ${firstUpper}: \n Your place at number ${sitNum}`);
//   } else if (typeof +name === 'number' && +name === +name) {
//     alert(`Thank you Mr/Mrs: \n Your place at number ${sitNum}`);
//   }
// };
//
// const errorResult = () => alert(`Wrong passport number or ticket code. Please, try again!`);
//
// passportControl(passengersDetails, successResult, errorResult);

//2️⃣ way with object methods
// const passengersDetails = {
//   passengerName: prompt('OPTIONAL: \n Please, enter your name', ''),
//   passportNum: +prompt('Please, enter your passport number!', '0000000000'),
//   ticketCode: +prompt('Please, enter your ticket code!', '000000'),
//   successAlert: function (sitName) {
//     let name = this.passengerName;
//
//     if (isNaN(+name)) {
//       name = name.toLowerCase();
//       const firstUpperName = name[0].toUpperCase() + name.slice(1);
//
//       alert(`Thank you ${firstUpperName}: \n Your place at number ${sitName}`);
//     } else if (typeof +name === 'number' && +name === +name) {
//       alert(`Thank you Mr/Mrs: \n Your place at number ${sitName}`);
//     }
//   },
//   invalidFlightAlert: function () {
//     alert(`Wrong passport number or ticket code. Please, try again!`);
//   },
// };
//
// // The main function
// function passportControl(passenger) {
//   const sitNum = Math.round(Math.random() * 100) + 1;
//
//   if (check(passenger.passportNum, passenger.ticketCode)) {
//     return passenger.successAlert(sitNum);
//   }
//   return passenger.invalidFlightAlert();
//
//   // return check(passenger.passportNum, passenger.ticketCode) ? successFlight(passenger.passengerName, sitNum) : invalidFlight();
// }
//
// // checker function
// const check = function (passport, ticket) {
//   return passport && ticket;
// };
//
// passportControl(passengersDetails);
