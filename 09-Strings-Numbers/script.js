'use strict';
//====================== 👩🏻‍💻 coding challenges ===============
/*
Create a function that receives an argument epam's name,
 and returns an object with uppercase,
 then we need to console.log of this object's values
 Lets console without directly taking the object iterator
 */
//function should take argument(s),
// you need take whole arguments and create an  object
// then add whole args into this object,

// after return this object,
// then you need to console whole values which are exists in this object,
// don't forgot to use these values with Uppercase.

//1️⃣

function displayAboutUser() {
  const aboutObj = {};
  for (const iterator in arguments) {
    aboutObj[iterator] = arguments[iterator].toString().toUpperCase();
  }
  return aboutObj;
}

const about = displayAboutUser('Jonas', 'epam', 'Australia', 2, 445);

for (const key in about) {
  console.log(about[key]);
}

//2️⃣
// function DisplayAboutUser(name, company, from, experience) {
//   this.name = name;
//   this.company = company;
//   this.from = from;
//   this.experience = experience;
//   this.numericMsg = '';
//   this.letterMsg = '';
//
//   for (let i = 0; i < arguments.length; i++) {
//     if (Number.isFinite(arguments[i])) {
//       this.numericMsg += ` ${arguments[i]}:`;
//     } else {
//       this.letterMsg += `${arguments[i].toUpperCase()}: `;
//     }
//   }
//
//   this.message = this.letterMsg + this.numericMsg;
// }
// const user1 = new DisplayAboutUser('Jonas', 'epam', 'Australia', 3, 'aba', 543);
// const user2 = new DisplayAboutUser('Sarah', 'adobe', 'usa', 5);
//
// console.log(user1);
// console.log(user1.message);
// console.log(user2.message);\
//3️⃣
const aboutUser = function () {
  return [...arguments].reduce(function (acc, val) {
    if (val) acc[val] = val.toString().toUpperCase();

    return acc;
  }, {});
};

const result = aboutUser('Jonas', 'epam', 'Australia', 2, 445, undefined);
console.log(...Object.values(result));
