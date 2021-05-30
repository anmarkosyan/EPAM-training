'use strict';
//====================== 👩🏻‍💻 coding challenges => Timer ====================
//console.log(window.setTimeout);//global object method
//1️⃣
// const timer = setTimeout(function () {
//   console.log('hi');
// }, 10000);
//
// setTimeout(function () {
//   clearTimeout(timer);
//   console.log('stop timer!!');
// }, 5000);
//2️⃣
// for (var i = 0; i < 10; i++) {
//   setTimeout(
//     num => {
//       console.log(num);
//     },
//     0,
//     i
//   );
// }
//0 1 2 3 4 5 6 7 8 9

//3️⃣
// for (let i = 0; i < 10; i++) {
//   const start = Date.now();
//   setTimeout(() => {
//     console.log(Date.now() - start);
//   }, 1500);
// }

//4️⃣
/*
* The code snippet below is synchronous. It calls callback1 one time and callback2 three times. 
* You must modify this code to make it asynchronous with the following rules:

1.callback1 must be called only one time, after 2 seconds.
2.callback2 must be called three times with an interval of 1 second.
*/
// function job(callback1, callback2) {
//   setTimeout(() => {
//     callback1();
//   }, 2000);
//   const timer = setInterval(() => {
//     callback2();
//   }, 1000);
//
//   setTimeout(() => {
//     clearInterval(timer);
//   }, 3000);
// }
//
// const fnc1 = function () {
//   console.log('timer1');
// };
//
// const fnc2 = function () {
//   console.log('timer2');
// };
// job(fnc1, fnc2);
//5️⃣
// function evenOdd(data) {
//   return new Promise(function (resolve, reject) {
//     if (isNaN(data)) reject('error');
//     else if (data % 2 !== 0) {
//       setTimeout(resolve, 1000, 'odd');
//     } else {
//       setTimeout(reject, 2000, 'even');
//     }
//   });
// }
//
// const test = function (promise) {
//   return promise.then(res => console.log(res)).catch(err => console.log(err));
// };
// test(evenOdd(5));
// test(evenOdd(8));
// test(evenOdd('ko'));
//6️⃣
/*
 * Print the message “Hello after 4 seconds” after 4 seconds
 * Print the message “Hello after 8 seconds” after 8 seconds.
 * */
// const wait = delay => {
//   console.log(`Hello after ${delay} seconds!`);
// };
//
// setTimeout(wait, 4 * 1000, 4);
// setTimeout(wait, 8 * 1000, 8);

//using clearTimeout
//const timerId = setTimeout(() => console.log('You will never see this one 🤷🏻‍'), 0);
//console.log(timerId);
//clearTimeout(timerId);

//7️⃣ setImmediate:❗️ use only for node.js, don't use it for front-end code
//setImmediate(() => console.log('I am equivalent to setTimeout with 0 ms'));
//clearImmediate();

//exp:
//setTimeout(() => console.log('hello after 1 second, MAYBE!!'), 1000);

//for (let i = 0; i < 1e10; i++) {}

//8️⃣
/*
 * Write a script to print the message “Hello World” every second, but only 5 times.
 * After 5 times, the script should print the message “Done” and let the Node process exit.
 *
 * Constraints: You cannot use a setTimeout call for this challenge.
 * Hint: You need a counter.
 * */

// let counter = 0;
// const intervalId = setInterval(function () {
//   console.log('Hello world!');
//   counter++;
//   if (counter === 5) {
//     console.log('Done!');
//     clearInterval(intervalId);
//   }
// }, 1000);

//9️⃣THIS !!!! Who exactly “calls” the delayed functions?
// const obj = {
//   id: 42,
//   whoCallMe() {
//     console.log('Caller is', this);
//   },
// };
// obj.whoCallMe();
// setTimeout(obj.whoCallMe, 0); //Timeout object

//1️⃣0️⃣
/*
* Write a script to continuously print the message “Hello World” with varying delays.
* Start with a delay of 1 second and then increment the delay by 1 second each time.
* The second time will have a delay of 2 seconds. The third time will have a delay of 3 seconds, and so on.
* Include the delay in the printed message. Expected output looks like:
Hello World. 1
Hello World. 2
Hello World. 3
...
* Constraints: You can only use const to define variables. You can’t use let or var.
*/

const greeting = delay => {
  setTimeout(() => {
    console.log(`Hello World. ${delay}`);
    greeting(delay + 1);
  }, delay * 1000);
};

greeting(1);
