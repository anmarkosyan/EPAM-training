'use strict';
//=============== 🔴 lecture part ===================
/*
//1️⃣
const btn = document.querySelector('.btn-country');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})!!!`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data[0]);
      const neighbour = data[0].borders[1];

      if (!neighbour) throw new Error('No neighbour found 🤷🏻‍');
      return getJSON(`https://restcountries.eu/rest/v2/name/${neighbour}`, 'Country not found');
    })
    .then(data => console.log(data[0]))
    .catch(err => console.error(`Something went wrong 💥💥💥 ${err.message} .Try again!`));
};

btn.addEventListener('click', function () {
  getCountryData('armenia');
});
*/
//2️⃣
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('YOU WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });
//
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//3️⃣ chaining
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
//
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 second!');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second!'));

//4️⃣ async/await
// const getCountryDataAsync = async function (country) {
//   try {
//     const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//     const data = await response.json();
//     console.log(data[0]);
//     const neighbour = data[0].borders[1];
//
//     const neighbourData = await fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
//     const data2 = await neighbourData.json();
//     console.log(data2[0]);
//   } catch (err) {
//     console.error(err);
//   }
// };
//  getCountryDataAsync('armenia');
// console.log('first');
//5️⃣
// function wait(secondsToWait) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(`Resolved after ${secondsToWait} seconds`), secondsToWait * 1000);
//   });
// }
//
// async function fn() {
//   console.log('Beginning fn');//1 output
//
//   const result = await wait(2);//stop function invoked
//   console.log(result);//after 2 sec will resolve aoutput
//
//   console.log('Ending fn');// 3 output
// }
//
// fn();

//================ 🔴 coding challenges =============
//1️⃣ Find the bug
// function feelings(val, func) {
//   console.log('I am ' + val + ', ' + func(2));
// }
//
// var laughing = function (num) {
//   var laugh = '';
//   for (var i = 0; i < num; i++) {
//     laugh = laugh + 'ha';
//   }
//   return laugh;
// };
//
// function display() {
//   feelings('happy', laughing);
// }
// display();

//2️⃣ check the names using callback function
// const checkName = (firstName, lastName, callback) => {
//   console.log(callback(firstName, lastName));
// };
//
// function callback(...arg) {
//   const [firstName, lastName] = arg;
//   if (!firstName) return new Error('No First Name Entered!');
//   if (!lastName) return firstName;
//   else return `${firstName} ${lastName}`;
// }
//
// checkName('Aram', 'Markos', callback);
//2way
// const checkName = (firstName, lastName, callback) => {
//   if (!firstName) return callback(new Error('No First Name Entered!'));
//   if (!lastName) return callback(firstName);
//
//   const fullName = `${firstName} ${lastName}`;
//   return callback(fullName);
// };
//
// function callback(arg) {
//   console.log(arg);
// }
// checkName('anush', 'markos', callback);
//3️⃣ find bug
// const getTodo = callback => {
//   setTimeout(() => {
//     callback({ text: 'Complete Code Example' });
//   }, 2000);
// };
//
// function display() {
//   getTodo(msg => {
//     console.log(msg.text);
//   });
// }
// display();

//4️⃣
/*
 * In this challenge, you have to implement the function evenOdd. It takes a number num as a parameter.
 * You have to make use of the concept of promises to determine whether num is even or odd.
 * You need to do the following:
 * 1.If num is not a number, reject the promise with the data error that is passed to it.
 * 2.If num is odd, resolve the promise after 1 second with the data odd passed to it.
 * 3.If num is even, reject the promise after 2 seconds with the data even passed to it.
 */
// function evenOdd(num) {
//   return new Promise(function (resolve, reject) {
//     if (isNaN(num)) reject('error');
//
//     if (num % 2 !== 0) {
//       setTimeout(() => {
//         resolve('odd');
//       }, 1000);
//     }
//
//     if (num % 2 === 0) {
//       setTimeout(() => {
//         reject('even');
//       }, 2000);
//     }
//   });
// }
//
// function test(number) {
//   return evenOdd(number)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }
//
// test(4);
// test(5);
// test('bhg');
//5️⃣ what will be the output
// function func1() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve('Func1');
//     }, 1000);
//   });
// }
//
// function func2() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve('Func2');
//     }, 2000);
//   });
// }
//
// func1()
//   .then( func2()) //will skip this part
//   .then(function (result) {
//     console.log(result); //'Func1'
//   });

//6️⃣ what will be the output
// function func1() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve('Func1');
//     }, 1000);
//   });
// }
//
// function func2() {
//   console.log('Func2');
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve('Inside Func2');
//     }, 2000);
//   });
// }
//
// func1()
//   .then(function (result) {
//     console.log(result);//'Func1'
//       func2();//'Func2'
//   })
//   .then(function (result) {
//     console.log(result);//undefined
//   });

//7️⃣
// const computeSqrtAsync = function (number) {
//   if (number < 0) {
//     return Promise.reject('no negative number, please!.');
//   }
//
//   if (number === 0) {
//     return Promise.resolve(0);
//   }
//
//   return new Promise(function (resolve) {
//     setTimeout(() => resolve(Math.sqrt(number)), 1000);
//   });
// };
//
// //START:STATE
// const forNegative1 = computeSqrtAsync(-1);
// const forZero = computeSqrtAsync(0);
// const forSixteen = computeSqrtAsync(16);
//
// const testing = function (promise) {
//   promise
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(err => console.error(err));
// };
//
// testing(forNegative1);
// testing(forZero);
// testing(forSixteen);
