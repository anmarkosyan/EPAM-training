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
