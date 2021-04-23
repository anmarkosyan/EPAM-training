'use strict';

function age() {
  const currYear = 34;
  return year(currYear);
}

age(); //✅ I am 34. => because year function is declaration have hoisting

function year(year) {
  console.log(`I am ${year}.`);
}

//=====
function age1() {
  const currYear = 33;
  return year1(currYear);
}
//age1();// ❗️ ❗️ReferenceError: Cannot access 'year1' before initialization

const year1 = function (year) {
  console.log(`I am ${year}`);
};

age1(); //I am 33.

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

// const passengersDetails = {
//   passengerName: prompt('OPTIONAL: \n Please, enter your name.', ''),
//   passportNum: +prompt('Please, enter your passport number!', '0000000000'),
//   ticketCode: +prompt('Please, enter your ticket code!', '000000'),
// };
// // The main function
// function passportControl(passenger, successFlight, invalidFlight) {
//   const sitNum = Math.round(Math.random() * 100) + 1;
//
//   if (check(passenger.passportNum, passenger.ticketCode)) {
//     return successFlight(passenger.passengerName, sitNum);
//   }
//   return invalidFlight();
//   // return check(passenger.passportNum, passenger.ticketCode) ? successFlight(passenger.passengerName, sitNum) : invalidFlight();
// }
// // checker function
// const check = function (passport, ticket) {
//   return passport && ticket;
// };
// //success callback
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
// //error callback
// const invalidRegistration = () => alert(`Wrong passport number or ticket code. Please, try again!`);
//
// //invoke main function
// passportControl(passengersDetails, successResult, invalidRegistration);

//2 way with object methods
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
