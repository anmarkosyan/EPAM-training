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
//   // return Object.values(obj).reduce(function(obj, num){
//   //   obj += num;
//   //   return obj;
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

  return [...newStr].reduce(function(obj, el){
    if(el !== ' ' && !obj[el]) {
          obj[el] = 1;
        } else if (obj[el]) {
          obj[el]++;
        }
    return obj;
  }, {})
}

console.log(countLetters('school')); //{s: 1, c: 1, h: 1, o: 2, l: 1}
console.log(countLetters('I like milk')); //{i: 3, l: 2, k: 2, e: 1, m: 1}
 */

//🏋🏻‍♀️
// function countWords(str) {
//   const lowerStr = str.toLowerCase();
//   return lowerStr.split(' ').reduce(function (obj, word) {
//     if (!obj[word]) obj[word] = 1;
//     else obj[word]++;
//     return obj;
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
//   const obj = arr.reduce(function (obj, num) {
//     if (!obj[num]) obj[num] = 1;
//     else obj[num]++;
//     return obj;
//   }, {});
//
//   const maxNum = Math.max(...Object.values(obj));
//
//   return Object.keys(obj).reduce(function (obj, num) {
//     if (obj[num] === maxNum) obj.push(+num);
//     return obj;
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

//🏋🏻‍♀️
// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++){
//   numbers.push(i + 1);
// }
//
// console.log(numbers); // [1, 2, 3, 4]

//🏋🏻‍♀️
// const person = Object.create({
//   name: 'Anush',
//   age: 34,
// });
// delete person.age;
// console.log(person.age); //34
//
// const person2 = {
//   name: 'Aram',
//   age: 35,
// };
//
// delete person2.age;
// console.log(person2.age); //undefined

//🏋🏻‍♀️
// var a = 1;
// function foo() {
//   var a = 2;
//   console.log(a);//2
// }
// foo();
// console.log(a);//1

//🏋🏻‍♀️
// var answer = 0;
//
// const baseValue = value => multipleValue => value * multipleValue;
//
// const multiple = baseValue(2);
// answer = multiple(5);
// console.log(answer);//10

//🏋🏻‍♀️
// function outerFunc(outerParam) {
//   function innerFunc(innerParam) {
//     outerParam['b'] = innerParam;
//   }
//   return innerFunc;
// }
//
// const obj = { a: 1 };
// const example = outerFunc(obj);
// const answer = example(2);
// console.log(obj); //{ a: 1, b: 2 }

//🏋🏻‍♀️
// let arr = [1, 2];
// function test(array) {
//   array.push(3);
// }
// test(arr);
// console.log(arr); //[1, 2, 3]
//
// let arr1 = [1, 2];
// function test1(array) {
//   array.push(3);
// }
// test1([...arr]);
// console.log(arr1); //[1, 2]
//
// let arr2 = [1, 2];
// function test2(array) {
//   arr2 = [1, 2, 3];
// }
// test2(arr2);
// console.log(arr2);

//🏋🏻‍♀️
// const carDetails = {
//   name: "Tomer",
//   getName(){
//     return this.name;
//   },
// };
// var name = "Joe";
// var getCarName = carDetails.getName;
//console.log(getCarName()); //undefined with struct mode and 'Joe' without mode

//🏋🏻‍♀️
// var foo = 'bim';
// var getFoo = function () {
//   return foo;
// };
//
// foo = 'boum';
// console.log(getFoo()); // 'boum'

//🏋🏻‍♀️
// function Dog(name) {
//   this.name = name;
// }
// Dog.bark = function () {
//   console.log(this.name + ' says woof');
// };
// let fido = new Dog('fido');
//
// console.log(fido);//Dog { name: 'fido' }
//fido.bark();//TypeError: fido.bark is not a function

// function Dog1 (name) {
//   this.name = name
// }
//
// Dog1.prototype.bark = function () {
//   console.log(this.name + ' says woof')
// }
//
// let fido1 = new Dog1('fido')
// fido1.bark() // "fido says woof"
//1️⃣
/*
 * Given an unsorted array of numbers and another num,
 * you are required to find the index at which the num would be placed
 * if it were to be inserted in a sorted version of the array of numbers.
 * */
// const getIndex = (arr, num) => arr.reduce((counter, currNum) => (currNum < num ? ++counter : counter), 0);
// console.log(getIndex([5, 1, 4, 3], 2));

//2️⃣

// function createPhoneNumber(arr) {
//   const str = arr.join('');
//   const first = str.slice(0, 3);
//   const second = str.slice(3, 6);
//   const last = str.slice(-4);
//   return `(${first}) ${second}-${last}`;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//3️⃣
// function sliceSplice(array1, array2, n) {
//   // const newArray = array2.splice(0, n);
//   // //console.log(newArray);
//   // return [...newArray, ...array1, ...array2];
//   const newArray = array2.slice(0);
//   //console.log(newArray);
//   newArray.splice(n, 0, ...array1);
//   return newArray;
// }
//
// console.log(sliceSplice([1, 2, 3], [4, 5, 6], 1)); //[4, 1, 2, 3, 5, 6]
// console.log(sliceSplice([8, 9, 10], [11, 12, 13], 2)); //[11, 12, 8, 9, 10, 13]

//4️⃣
/*
* Let’s say your teammate is working on a JavaScript code that won’t run because the 
* brackets (square, curly, round) are not properly nested. You then decide to write 
* a Parentheses Checker function, which efficiently checks whether or not the input string’s 
* opening and closing brackets are correctly nested.
* 
"{ [ ] ( ) }" //true
"{ [ ( ] ) }" //false
*/

const parenthesesChecker = function (str) {
  //2way
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if ((str[i] === '[' && str[i + 1] === ']') || (str[i] === '(' && str[i + 1] === ')')) {
      count++;
    }
  }

  return !!count;
};

console.log(parenthesesChecker('{[]()}')); //
console.log(parenthesesChecker('{[(])}')); //
