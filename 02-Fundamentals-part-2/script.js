'use strict';

//========= 🔴 if/else statement========
//📍 Falsy values => 0, '', undefined, null, NaN

//========= 🔴 Logical operators || and && =========
//They can use ANY data type, can return ANY data type, do short-circuiting
//📍 || => or
/*
console.log('----- OR -----');
console.log(3 || 'Anush'); //3
console.log('' || true); //true
console.log(undefined || null); //null
console.log(0 || []); //[]
console.log(null || 0 || false || 'anush' || true); //anush => will return first true value and stop circuit

//📍 setting default values with ||
//restaurant.numGuests = 23;//but if 0 it will be false
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10; //the same
console.log(guests1); //10
console.log(guests2); // 10

//📍 && => and => All need to be true
console.log('---- AND -----');
console.log(0 && 'Anush'); //0 => will return first false value and stop circuit
console.log(23 && 'Aram'); // Aram => if all is true will return last true value
console.log(23 && 'hi' && true && 23 + 3); // 26
console.log(23 && 'hi' && true && null && 23 + 3); // null first false value

//========== 🔴 Nullish coalescing============
//📍null and undefined === false,  0 and '' === true =======
restaurant.numGuests = 0;
const guest = restaurant.numGuests ?? 10;
console.log(guest);//0
 */

//========================= 👩🏻‍💻 coding challenge ====================
//1️⃣:
/*
using prompt you need to get value and existing of type to alert the type and value,
 and if it is number and more than 30 you should alert 'the type is number and more than 30'
 otherwise 'the type is number and less than 30',
 if it is string, you should alert 'the type is string and value: ${value}'
*/

const promptVal = prompt('Please, enter random value!', '');
const type = +promptVal ? 'number' : 'string';

if (+promptVal > 30) {
  alert(`The type is ${type} and more than 30.`);
} else if (+promptVal < 30) {
  alert(`The type is ${type} and less than 30.`);
} else {
  alert(`The type is ${type} and value: ${promptVal}`);
}
//2 way
// const type = typeof val === 'number' && +val === +val ? 'number' : 'string';
//
// if ( +val > 30) {
//   alert(`The type is ${type} and more than 30.`);
// } else if (+val < 30) {
//   alert(`The type is ${type} and less than 30`);
// } else {
//   alert(`The type is ${type} and value: ${val}`);
//  }
//or
// const msg =
//    +val > 30
//     ? `The type is ${type} and more than 30.`
//     :  +val < 30
//     ? `The type is ${type} and less than 30`
//     : `The type is ${type} and value: ${val}`;

// alert(msg);

//2️⃣:
/*
Create 3 variables: name, surName, userName which values should be taken from prompt.
Output the first value which is filled in the prompt window,
or if all the values are empty, then output default 'Unknown'
*/
// const name = prompt('Please, enter your name!', '');
// const surName = prompt('Please, enter your surname!', '');
// const userName = prompt('Please, enter your name!', '');
//
// alert(name || surName|| userName || 'Unknown');

//3️⃣:
/*
Create an age variable which takes from prompt.
You have another ageDescription variable which is declared but value is not assigned.
If user enters age equal or more then 1, change ageDescription to 'years', otherwise don't change ageDescription.
Print in the end User is ${age}' and concat ageDescription or default value  'months' if age is less then 1.
Use ?? Nullish coalescing operator.
 */

// const age = prompt('Please enter your age!', '');
// let ageDescription;
//
// if (+age >= 1) {
//   ageDescription = 'years';
// }

//alert(ageDescription ? `User is ${age} ${ageDescription}` : `User is ${Math.round(age * 12)} ${ageDescription ?? 'months'}`);

//❗️all rounding integers Math methods have type coercion, string auto convert to number
//in this case Math.round(age) // typeof number
