'use strict';
//====================== 👩🏻‍💻 coding challenges ===============
/*
Create a function that receives an argument epam's name,
 and returns an object with uppercase,
 then we need to console.log of this object's values
 Lets console without directly taking the object key
 */
//function should take argument(s),
// you need take whole arguments and create an  object
// then add whole args into this object,

// after return this object,
// then you need to console whole values which are exists in this object,
// don't forgot to use these values with Uppercase.

//1️⃣
// const displayAboutUser = function (userName, userCompany) {
//   return {
//     name: userName.toUpperCase(),
//     company: userCompany.toUpperCase(),
//
//     [Symbol.toPrimitive]() {
//       return `${this.name}: from ${this.company}`;
//     },
//   };
// };
//
// console.log(`${displayAboutUser('Jonas', 'epam')}`);
// console.log(displayAboutUser('hi', 'say'));

//2️⃣
function displayAboutUser(...arg) {
  const aboutObj = { ...arg };
  let namesToUpper = '';

  for (const key in aboutObj) {
    namesToUpper += aboutObj[key].toUpperCase() + ' ';
  }
  return namesToUpper;
}

console.log(displayAboutUser('Jonas', 'epam', 'Australia'));

//3️⃣
function DisplayAboutUser(name, company, from) {
  this.name = name;
  this.company = company;
  this.from = from;
  this.namesToUpper = '';

    for (let i = 0; i < arguments.length; i++) {
      this.namesToUpper += arguments[i].toUpperCase() + ' ';
    }


}
const user1 = new DisplayAboutUser('Jonas', 'epam', 'Australia');
const user2 = new DisplayAboutUser('Sarah', 'adobe', 'usa');

console.log(user1);
console.log(user1.namesToUpper);
console.log(user2.namesToUpper);

