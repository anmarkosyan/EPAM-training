'use strict';

//====================== 🔴 this keyword =====================
/*
console.log(this); // window object
//======
const calcAge = function () {
  console.log(this); //undefined
};
calcAge();

//=========
function calcAge1() {
  console.log(this); //undefined
}
calcAge1();

//======
const calcAge2 = () => {
  console.log(this); //window object, because arrow function doesn't have it's own this, instead he use LEXICAL KEYWORD, it means will
  //inherit parents function this
};
calcAge2();

//=======
const year = 2021;

const style = {
  year: 1951,
  getYear: function () {
    return this.year;// 'this' is refer between object and function
    //return year;// 2021 because JS engine will search for variable name with year, not property!!!!!
  },
};

console.log(style.getYear());
//=====
var firstName = 'Aram';

const user = {
  firstName: 'Anush',
  year: 1991,
  calcAge: function () {
    //console.log(this);//user{}
    console.log(2021 - this.year); //30
  },

  greet: () => {
    console.log(this); //window object
    console.log(this.firstName); //undefined || var firstName = 'Aram'; will calling as window.firstName = 'Aram'
  },
};

user.calcAge();
user.greet();

 */
//=========
// function makeUser() {
//   return {
//     name: 'John',
//     //ref: this,//undefined
//     ref: function () {
//       return this; //{name: 'John', [functions: ref]}
//     },
//   };
// }
//
// let user = makeUser(); //let user = { name: 'John', ref: undefined}
// //console.log(user.ref.name); //TypeError: Cannot read property 'name' of undefined
// console.log(user.ref().name); //'John'

//=======
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     return this.step;
//   },
// };
//
// console.log(ladder.up());
// console.log(ladder.up());
// console.log(ladder.down());
// console.log(ladder.showStep()); //1

//console.log(ladder.up().up().down().showStep());

//1️⃣ exp:
// const user = {
//   name: 'Anush',
//   year: 2021,
//   birthYear: 2000,
//
//   calcAge() {
//     const year = 2022;
//     const newAge = () => {
//       return this.year - this.birthYear;
//     };
//
//     return {
//       year: 2020,
//       newAge1: function () {
//         return newAge();
//       },
//     };
//   },
// };
//
// console.log(user.calcAge().newAge1()); //21

//======= 2️⃣ exp: SIMPLY TECHNO ==========
// var obj = {
//   message: 'Welcome to Simply Technologies',
//   innerMessage: function () {
//     (function () {
//       console.log(this.message);
//     })();
//   },
// };
//
// console.log(obj.innerMessage()); //TypeError: Cannot read property 'message' of undefined

//==========
// const numbers = {
//   numberA: 5,
//   numberB: 10,
//
//   sum: function () {
//     console.log(this === numbers); // => true
//     const self = this;
//     // function calculate() {
//     //   // this is window or undefined in strict mode
//     //   console.log(this === numbers); // => false
//     //   console.log(self === numbers);// => true
//     //   return self.numberA + self.numberB;
//     // }
//
//     //or using arrow functions
//     const calculate = () => {
//       console.log(this === numbers); // => true
//       return this.numberA + this.numberB;
//     };
//
//     return calculate();
//   },
// };
//
// numbers.sum();

//======================= 🔴 constructor function ==================
const Person = function (firstName, birthYear) {
  //console.log(this); //Person {}=> will create a empty object
  this.firstName = firstName;
  this.birthYear = birthYear;
};
//constructor invocation with new keyword
const aram = new Person('Aram', 1986);
console.log(aram); //Person { firstName: 'Aram', birthYear: 1986 }

//when we call a function with new operator, behind a scenes
//1️⃣ New {} is created
//2️⃣ functions is called, this ===  {}
//3️⃣ {} -> linked to prototype
//4️⃣ function automatically  return {}

const alice = new Person('Alice', 1991);
console.log(aram === alice); //false

//===========
// function Car(carName, yearA, carsColor) {
//   this.name = carName;
//   this.year = yearA;
//   this.color = carsColor;
//   this.func = function () {
//     return 2021 - yearA;
//   };
// }
// const toyota = new Car('Toyota', 1890, 'black');
// console.log(toyota); //Car { name: 'Toyota', year: 1890, color: 'black', func: [Function] }
// console.log(toyota.func()); //131

//====================== 👩🏻‍💻 coding challenge ==============
/*
Create a constructor function named as ProgrammingLanguage, it should create an object with parameters like this:
{
name: "JavaScript",
creationDate: 1995,
log: function(str) {
  console.log(str)
 }
}
feel free do add additional parameters, also please send the data as function parameters
*/

function ProgrammingLanguage() {}
