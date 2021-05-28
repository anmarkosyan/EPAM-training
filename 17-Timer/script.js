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
//   let count = 0;
//   const timer = setInterval(()=>{
//     callback2();
//     count++;
//     if(count === 3){
//       clearInterval(timer);
//     }
//   }, 1000)
//    setTimeout(()=>{
//     callback1()
//   }, 2000)
// }
//
// job(
//   function () {
//     console.log('timer1');
//   },
//   function () {
//     console.log('timer2');
//   }
// );
//5️⃣
// function evenOdd(data) {
//   return new Promise(function (resolve, reject) {
//     if (isNaN(data)) reject('error');
//     if (data % 2 !== 0) {
//       setTimeout(() => {
//         resolve('odd');
//       }, 1000);
//     }
//     setTimeout(() => {
//       reject('even');
//     }, 2000);
//   });
// }
//
// const test = function (promise) {
//   return promise.then(res => console.log(res)).catch(err => console.log(err));
// };
// test(evenOdd(5));
// test(evenOdd(8));
// test(evenOdd('ko'));
