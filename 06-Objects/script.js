'use strict';

//===================== 🔴 Objects ========================
//Objects are not compared by value: two objects are not equal even if they have same value and the same property
//and 2 arrays are not equal even they have tha same element and same order
console.log({} === {}); // false
console.log([] === []); // false

const obj1 = {
  name: 'Jonas',
  age: 34,
};
const year = 123;
const obj2 = {
  name: 'Jonas',
  age: 0,
  year: !!year,
};
console.log(obj2);
console.log(obj1 === obj2); // false

const obj3 = obj1;
obj3.name = 'Aram';
console.log(obj3 === obj1); //true

if (obj2.age) console.log('hi');
else console.log('bye'); // will looking for a truthy value

if ('age' in obj2) console.log('good');
//will looking for a exist key
else console.log('bed');

//const pizza = function (ing1, ing2, ing3) {
  //📌doing some experiments
  // const exist1 = !!ing1;
  // const exist2 = !!ing2;
  // const exist3 = !!ing3;
  // let age  = 34;
  // return {
  //   //age,
  //   age: age > 30 ? 'hi' : 'bye',
  //   [age]: age,
  //   [!!age]: true,
  //   [age > 30 ? 'good' : 'bed'] : age,
  //
  //   ing3,
  //   [ing1]: exist1,
  //   [ing2]: exist2,
  //   [ing3]: exist3,
  // };
  //  return {
  //   [ing1]: !!ing1,
  //   [ing2]: !!ing2,
  //   [ing3]: !!ing3,
  // };
//};

//console.log(pizza('', 'spinach', 'olive'));
/*
//exp:
const calc = {
  sum: function (num) {
    return function (n) {
      console.log(num + n);
    };
  },
};

calc.sum(2)(2); //4

 */

//============================== 👩🏻‍💻 coding challenge ====================================
/*
Please create an object like this {1: 'John', 2: 'Nick'},
and get a number with prompt,
so if user will input 2 alert 'Nick'
*/

// const promptValue = +prompt('🏓 To play table tennis, you should choose a playmate. \n Enter a number from 1 to 5.', '');
//
// const choosePlayer = function (prompt) {
//   const players = {
//     1: 'John',
//     2: 'Nick',
//     3: 'Sarah',
//     4: 'Michel',
//     5: 'Alen',
//   };
//   alert(players[prompt] ? `🎉 Your playmate is ${players[prompt]}.` : '❗️Wrong number: try again.');
// };
//
// choosePlayer(promptValue);

//2 way
// const players = {
//   promptValue: +prompt('🏓 To play table tennis, you should choose a playmate. \n Enter a number from 1 to 5.', ''),
//   playersName: {
//     1: 'John',
//     2: 'Nick',
//     3: 'Sarah',
//     4: 'Michel',
//     5: 'Alen',
//   },
//   choosePlaymate: function () {
//     const playmateName = this.playersName[this.promptValue];
//     alert(playmateName ? `🎉 Your playmate is ${playmateName}.` : '❗️Wrong number: try again.');
//   },
// };
// players.choosePlaymate();
