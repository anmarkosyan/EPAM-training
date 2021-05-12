//'use strict';
//🏋🏻‍♀️
// Number.prototype.plus = function (number) {
//   return this + number;
// };
//
// Number.prototype.minus = function (number) {
//   return this - number;
// };
// console.log((5).plus(3).plus(3).minus(2));

//🏋🏻‍♀️
/*There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
//
// const sumSalaries = function (obj) {
//   let sum = 0;
//   for (const value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
//
//   // return Object.values(obj).reduce(function(acc, num){
//   //   acc += num;
//   //   return acc;
//   // }, 0)
// };
// console.log(sumSalaries(salaries)); //650

//🏋🏻‍♀️
//Write a function count(obj) that returns the number of properties in the object:
// let user = {
//   name: 'John',
//   age: 30,
// };
//
// const count = function (obj) {
//   return Object.keys(obj).length;
// };
//
// console.log(count(user)); // 2

//🏋🏻‍♀️

// const curry = {
//   fName: "Steph",
//   lName:"Curry",
//   number:30,
//   team:"Warriors",
//   college:"Davidson"};
//
// function getCollege(player){
//   return player.college;
//
// }
//
// console.log(getCollege(curry));

//🏋🏻
/*‍♀️
function NBAPlayer(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}

const iverson = new NBAPlayer("Iverson", "76ers", 11.2);
const jordan = new NBAPlayer("Jordan", "bulls", 20.2);


const sumPPG = function(player1, player2){
  return player1.ppg + player2.ppg

};

console.log(sumPPG(iverson, jordan));// => 31.4
 */

//🏋🏻‍♀️
/*
function countLetters(str) {
  const newStr = str.toLowerCase();
  // const obj = {};
  // for (const el of newStr) {
  //   if (el !== ' ' && !obj[el]) {
  //     obj[el] = 1;
  //   } else if (obj[el]) {
  //     obj[el]++;
  //   }
  // }
  //
  // return obj;

  return [...newStr].reduce(function(acc, el){
    if(el !== ' ' && !acc[el]) {
          acc[el] = 1;
        } else if (acc[el]) {
          acc[el]++;
        }
    return acc;
  }, {})
}

console.log(countLetters('school')); //{s: 1, c: 1, h: 1, o: 2, l: 1}
console.log(countLetters('I like milk')); //{i: 3, l: 2, k: 2, e: 1, m: 1}
 */

//🏋🏻‍♀️
// function countWords(str) {
//   const lowerStr = str.toLowerCase();
//   return lowerStr.split(' ').reduce(function (acc, word) {
//     if (!acc[word]) acc[word] = 1;
//     else acc[word]++;
//     return acc;
//   }, {});
// }
//
// console.log(countWords('A life is a moment')); //{a: 2, life: 1, is: 1, moment: 1}

//🏋🏻‍♀️
/*
function LivingThing(name, race) {
  this.name = name;
  this.race = race;
}
const player = new LivingThing('Gary', 'human');
const plant = new LivingThing('Carrot', 'plant');

const bite = function (thing) {
  // if (thing.race === 'human') thing.race = 'zombie';
  //
  // return thing;

  thing.race === 'human' ? (thing.race = 'zombie') : thing.race;
  return thing;
};
console.log(bite(player));
console.log(bite(plant));
 */

//🏋🏻‍
// function mostFrequentElement(arr) {
//   const obj = arr.reduce(function (acc, num) {
//     if (!acc[num]) acc[num] = 1;
//     else acc[num]++;
//     return acc;
//   }, {});
//
//   const maxNum = Math.max(...Object.values(obj));
//
//   return Object.keys(obj).reduce(function (acc, num) {
//     if (obj[num] === maxNum) acc.push(+num);
//     return acc;
//   }, []);
// }
//
// console.log(mostFrequentElement([5, 2, 1, 5])); //[5]
// console.log(mostFrequentElement([5, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1])); //[1]
// console.log(mostFrequentElement([5, 7, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1])); //[1, 7]

//🏋🏻‍♀️
/*
const Ball = function (ballType = 'regular') {
  this.ballType = ballType;
};

console.log(new Ball().ballType);//'regular'
console.log(new Ball('super').ballType);//'super'
*/
//🏋🏻‍♀️
// String.prototype.isUpperCase = function () {
//   return this.toString() === this.toUpperCase();
// };
//
// console.log('c'.isUpperCase()); //false
// console.log('C'.isUpperCase()); // == true
// console.log('-------');
// console.log('#LOVEWINS'.isUpperCase());
// console.log('hello I AM DONALD'.isUpperCase()); // == false
// console.log('HELLO I AM DONALD'.isUpperCase()); // == true
// console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase()); // == false
// console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase()); // == true

//🏋🏻‍♀️
//checker only for 0-9 digits
/*
String.prototype.digit = function() {
  return /^\d$/g.test(this);
};
console.log(''.digit());//false
console.log('7'.digit());//true
console.log('12'.digit());//false
console.log('2ac'.digit());//false

console.log(+'');
 */
//🏋🏻‍♀️
// (function(){
//   var a = b = 3;
// })();
//with 'use strict' =>ReferenceError: b is not defined
//without mode
// console.log("a defined? " + (typeof a !== 'undefined'));//false
// console.log("b defined? " + (typeof b !== 'undefined'));//true => become a global variable
//🏋🏻‍♀️
// var myObject = {
//   foo: "bar",
//   func: function() {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo);// outer func:  this.foo = bar
//     console.log("outer func:  self.foo = " + self.foo);//outer func:  this.foo = bar
//     (function() {
//       console.log("inner func:  this.foo = " + this.foo);//outer func:  this.foo = undefined
//       console.log("inner func:  self.foo = " + self.foo);//outer func:  this.foo = bar
//     }());
//   }
// };
// myObject.func();
//🏋🏻‍♀️
//const sum = function (a, b) {
// if(b) return a + b;
// return function(b){
//   return a + b;
// }

// if (arguments.length === 2) return arguments[0] + arguments[1];
// return function (b) {
//    return a + b;
// };
//};
// console.log(sum(2, 3)); //5
// console.log(sum(2)(3)); //5

//🏋🏻‍♀️
// const x = {};
//
// ['hi', 'there'].forEach(function (el) {
//   x[el] = undefined;
// });
// console.log(x);//{ hi: undefined, there: undefined }

//🏋🏻‍♀️
// var arr1 = 'john'.split('');
// var arr2 = arr1.reverse();
// var arr3 = 'jones'.split('');
// arr2.push(arr3);
//
// console.log(arr1, arr2);
// console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1));
// console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));

//🏋🏻‍♀️
// console.log(1 +  "2" + "2");//'122'
// console.log(1 +  +"2" + "2");//'32'
// console.log(1 +  -"1" + "2");//'02'
// console.log(+"1" +  "1" + "2");//'112'
// console.log( "A" - "B" + "2");//'NaN2'
// console.log( "A" - "B" + 2);//'NaN'

//🏋🏻‍♀️
// console.log("0 || 1 = "+(0 || 1));//'0 || 1 = 1'
// console.log("1 || 2 = "+(1 || 2));//'1 || 2 = 1'
// console.log("0 && 1 = "+(0 && 1));//'0 && 1 = 0'
// console.log("1 && 2 = "+(1 && 2));//'1 && 2 = 2'

//🏋🏻‍♀️
// var a = {},
//   b = { key: 'b' },
//   c = { key: 'c' },
//   d = { key: 'd' };
//
// a[b] = 123;
// a[c] = 456;
// a[d] = 234;
// console.log(a); //{ '[object Object]': 234 }
//
// console.log(a[c]); //234
// console.log(a[b]); //234

//🏋🏻‍♀️
// var hero = {
//   _name: 'John Doe',
//   getSecretIdentity: function (){
//     return this._name;
//   }
// };
//
// var stoleSecretIdentity = hero.getSecretIdentity;
//
// console.log(stoleSecretIdentity());//undefined
// console.log(hero.getSecretIdentity());//'John Doe'

//🏋🏻‍♀️
// console.log(typeof undefined == typeof NULL);//true
// console.log(typeof undefined === typeof null);//false

//🏋🏻‍♀️
// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     b++; //NaN
//     var b = 3;
//     console.log(b);//3
//   }
//   inner();
// }
// outer();//3
