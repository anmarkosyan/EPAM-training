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
    //return year;// 2021 because JS engine will search for variwith year, not property!!!!!
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
//=======
// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.name = `${this.firstName} ${this.lastName}`;
// }
// const n = new NameMe('ann', 'Markos');
// console.log(n.firstName);
// console.log(n.lastName);
// console.log(n.name);

//=======
// const obj = {
//   arr: [],
// };
//
// obj.arr.push(17);
// const obj1 = obj;
//
// console.log(obj1.arr === obj.arr); //true
// console.log([17] === [17]); //false

//======
// function fn() {
//   console.log(this);
// }
//
// const obj = {
//   value: 5
// };
//
//
// const boundFn = obj.fn;
// console.log(obj);



//boundFn(); // -> { value: 5 }
//fn.call(obj); // -> { value: 5 }
//fn.apply(obj); // -> { value: 5 }

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
// 'Anush',
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
// const Person = function (firstName, birthYear) {
//   //console.log(this); //Person {}=> will create a empty object
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// //constructor invocation with new keyword
// const aram = new Person('Aram', 1986);
// console.log(aram); //Person { firstName: 'Aram', birthYear: 1986 }
//
// //when we call a function with new operator, behind a scenes
// //1️⃣ New {} is created
// //2️⃣ functions is called, this ===  {}
// //3️⃣ {} -> linked to prototype
// //4️⃣ function automatically  return {}
//
// const alice = new Person('Alice', 1991);
// console.log(aram === alice); //false

//===========
// function Car(carName, yearA, carsColor) {
//   this.carName = carName;
//   this.year = yearA;
//   this.color = carsColor;
//   this.func = function () {
//     return 2021 - this.year;
//   };
// }
// const toyota = new Car('Toyota', 1890, 'black');
// console.log(toyota); //C 'Toyota', year: 1890, color: 'black', func: [Function] }
// console.log(toyota.func()); //131

//====================== 👩🏻‍💻 coding challenge ==============
/*
Create a constructor function named as ProgrammingLanguage, it should create an object with parameters like thi "JavaScript",
creationDate: 1995,
log: function(str) {
  console.log(str)
 }
}
feel free do add additional parameters, also please send the data as function parameters
*/

/*
const languageData = ['Javascript', 'Python', 'C++'];
const promptVal = prompt(`What is your favourite programming language?.\n${languageData.join('\n')}`, '');

const formattedName = function (name) {
  name = name.toLowerCase();
  return name[0].toUpperCase() + name.slice(1);
};

//the main function
function ProgrammingLanguage(inputName, creationDate, createdBy, programmingLanguageType, nameFnc) {
  this.inputName = inputName;
  this.creationDate = creationDate;
  this.createdBy = createdBy;
  this.programmingLanguageType = programmingLanguageType;
  this.year = new Date().getFullYear();
  this.nameFnc = nameFnc;
  this.calcYear = function () {
    return this.year - this.creationDate;
  };

  this.alertMsg = function () {
    alert(
      `Welcome! \n${this.nameFnc(this.inputName)}, is a  ${this.programmingLanguageType} programming language created by ${this.createdBy} in ${
        this.creationDate
      }, almost ${this.calcYear()} years ago!`
    );
  };
}

//creat objects
const javaScript = new ProgrammingLanguage(promptVal, 1995, 'Brendan Eich', 'High-level', formattedName);
const python = new ProgrammingLanguage(promptVal, 1991, 'Guido van Rossum', 'mid-level', formattedName);
const c = new ProgrammingLanguage(promptVal, 1985, 'Bjarne Stroustrup', 'low-level', formattedName);

//function invocation
const result = function (programName) {
  if (!programName) {
    return alert('Try again!');
  } else if (javaScript.nameFnc(programName) === 'Javascript') {
    return javaScript.alertMsg();
  } else if (python.nameFnc(programName) === 'Python') {
    return python.alertMsg();
  } else if (c.nameFnc(programName) === 'C++') {
    return c.alertMsg();
  }
  return alert('Wrong answer!');
};

result(promptVal);
 */
