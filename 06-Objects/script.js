'use strict';

// console.log({} === {}); //false not the same reference id
//
// const num = 3;
// const user = {
//   userName: 'Anush',
//   age: 32,
//   let: 'hi', //all keys will converted into string
//   [{}]: 'test', //'[object Object]': 'test'
//   [num === 3 ? 'hi' : 'bye']: 'hi',
// };
//
// if (user.age) {
// }
// if ('name' in user) {
// }
//
// //delete user;//not to possible
// delete user.age;
// console.log(user);
//
// //nested objects

const ingredient = function (ing1, ing2, ing3) {
  // const juice1 = !!ing1;
  // const juice2 = !!ing2;
  // const juice3 = !!ing3;
  //
  // return {
  //   ing1: juice1,
  //   ing2: juice2,
  //   ing3: juice3,
  // };

  return {
    [ing1]: !!ing1,
    [ing2]: !!ing2,
    [ing3]: !!ing3,
  };
};

console.log(ingredient(0, 'spinach', 'olive'));

const calc = {
  sum: function (num) {
    return function (n) {
      return console.log(num + n);
    };
  },
};

calc.sum(2)(2); //4

//=================== 👩🏻‍💻 coding challenge ==================
/*
Please create an object like this {1: 'John', 2: 'Nick'},
and get a number with prompt,
so if user will input 2 alert 'Nick'
*/

const players = {
  1: 'John',
  2: 'Nick',
  3: 'Sarah',
  4: 'Michel',
  5: 'Alen',
};

const promptValue = +prompt('🏓 To play table tennis, you should choose your a playmate. \n Enter a number from 1 to 5', '');

alert(players[promptValue] ? `Your playmate is ${players[promptValue]}.` : 'Wrong number: try again');
