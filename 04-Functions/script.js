'use strict';

//functions
// function getSum(a, b) {
//   console.log(arguments);
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(a * b);
// }
// getSum(1, 2);

//execution context
//call stack i data structure
//expression
// let hello = function () {
//   console.log('hi');
// };
// hello = function () {
//   console.log('by');
// };
// hello();

//callback function like argument
// function hi(age, callback) {
//   if (age > 18) {
//     callback();
//   }
// }
//
// let warning = function () {
//   console.log('hi');
// };
// //warning();
// hi(56, warning);

// const calcPow = function (num, pow) {
//   //return num ** pow;
//   let mul = 1;
//   for (let i = 0; i < pow; i++) {
//     mul *= num;
//   }
//   return mul;
// };
//
// console.log(calcPow(2, 3)); //
//
// alert(numOfSteps === 5 ? sum : msg);
//
// function showWarningMessage(age, callback) {
//   age = age ?? 20;
//   if (age < 18) {
//     console.log(callback(15, 10));
//   }
// }
// const calcSum = (a, b) => (a + b);
// showWarningMessage(15, calcSum);
//

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

const passengersDetails = {
  passportNum: +prompt('Please, enter your passport number!', '0000000000'),
  ticketCode: +prompt('Please, enter your ticket code!', '000000'),
};

// The main function
function passportControl(passenger, successFlight, invalidFlight) {
  const sitNum = Math.round(Math.random() * 100) + 1;

  return check(passenger.passportNum, passenger.ticketCode) ? successFlight(sitNum) : invalidFlight();
}

// checker function
const check = function (passport, ticket) {
  return passport && ticket;
};

//success callback
const successResult = sitNum => {
  alert(`Thank you: \n Your place at number ${sitNum}`);
};

//error callback
const invalidRegistration = () => alert(`Wrong passport number, or ticket code. Please, try again!`);

passportControl(passengersDetails, successResult, invalidRegistration);
