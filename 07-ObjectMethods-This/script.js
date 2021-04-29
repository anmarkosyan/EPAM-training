'use strict';

//====================== 🔴 this keyword =====================
//console.log(this); // window object
//======
const calcAge = function () {
  //console.log(this); //undefined
};
calcAge();

//=========
function calcAge1() {
  //console.log(this); //undefined
}
calcAge1();

//======
const calcAge2 = () => {
  //console.log(this); //window object, because arrow function doesn't have it's own this, instead he use LEXICAL KEYWORD, it means will
  //inherit parents function this
};
calcAge2();

//=======
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

//======================= 🔴 constructor function ==================
//lexical environment
//constructor function
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
