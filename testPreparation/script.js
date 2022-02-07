'use strict';
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
// const sumSalaries = function (obj1) {
//   let sum = 0;
//   for (const value of Object.values(obj1)) {
//     sum += value;
//   }
//   return sum;
//
//   // return Object.values(obj1).reduce(function(obj1, num){
//   //   obj1 += num;
//   //   return obj1;
//   // }, 0)
// };
// console.log(sumSalaries(salaries)); //650

//🏋🏻‍♀️
//Write a function count(obj1) that returns the number of properties in the object:
// let user = {
//   name: 'John',
//   age: 30,
// };
//
// const count = function (obj1) {
//   return Object.keys(obj1).length;
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
  // const obj1 = {};
  // for (const el of newStr) {
  //   if (el !== ' ' && !obj1[el]) {
  //     obj1[el] = 1;
  //   } else if (obj1[el]) {
  //     obj1[el]++;
  //   }
  // }
  //
  // return obj1;

  return [...newStr].reduce(function(obj1, el){
    if(el !== ' ' && !obj1[el]) {
          obj1[el] = 1;
        } else if (obj1[el]) {
          obj1[el]++;
        }
    return obj1;
  }, {})
}

console.log(countLetters('school')); //{s: 1, c: 1, h: 1, o: 2, l: 1}
console.log(countLetters('I like milk')); //{i: 3, l: 2, k: 2, e: 1, m: 1}
 */

//🏋🏻‍♀️
// function countWords(str) {
//   const lowerStr = str.toLowerCase();
//   return lowerStr.split(' ').reduce(function (obj1, word) {
//     if (!obj1[word]) obj1[word] = 1;
//     else obj1[word]++;
//     return obj1;
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
//   const obj1 = arr.reduce(function (obj1, num) {
//     if (!obj1[num]) obj1[num] = 1;
//     else obj1[num]++;
//     return obj1;
//   }, {});
//
//   const maxNum = Math.max(...Object.values(obj1));
//
//   return Object.keys(obj1).reduce(function (obj1, num) {
//     if (obj1[num] === maxNum) obj1.push(+num);
//     return obj1;
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
// const obj1 = { a: 1 };
// const example = outerFunc(obj1);
// const answer = example(2);
// console.log(obj1); //{ a: 1, b: 2 }

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
/*
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
 */

//5️⃣Destructuring
// function pointValues(point) {
//   //const { name, age } = { ...point };
//   const { name, age } = point || {};
//   console.log(name);
//   console.log(age);
// }
// let point = { name: 'jerry', age: 2 };
// pointValues(point);
// point = undefined;
// pointValues(point);

//6️⃣ ========== code signal => matrixElementsSum =========
/*
*After becoming famous, the CodeBots decided to move into a new building together.
* Each of the rooms has a different cost, and some of them are free,
* but there's a rumour that all the free rooms are haunted!
* Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms,
* or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room,
*  your task is to return the total sum of all rooms that are suitable for the CodeBots
* (ie: add up all the values that don't appear below a 0).

 */
/*
const matrixElementsSum = function (matrix) {
  // return matrix.map((line, j) => line.map((el, i) => (matrix.slice(0, j).
  // every(l => l[i] !== 0) ? el : 0))).reduce((a, b) => a + b.reduce((c, d) => c + d), 0);
  const indexOfGhostHouse = [];
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        indexOfGhostHouse.push(j);
      } else if (indexOfGhostHouse.indexOf(j) === -1) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
};

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
); //9 -> 1 + 1 + 2 + 5 = 9
console.log(
  matrixElementsSum([
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10],
  ])
);
console.log(
  matrixElementsSum([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ])
); //15
 */

//7️⃣ =========== code signal -> commonCharacterCount ===============
/*
 * Given two strings, find the number of common characters between them.
 * */

//const commonCharacterCount = function (s1, s2) {
// let count = 0;
// for (const char of s1) {
//   if (s2.indexOf(char) > -1) {
//     count++;
//     s2 = s2.replace(char, '');
//   }
// }
// return count;
//2way
/*
  const obj1 = {};
  const obj2 = {};
  let count = 0;
  for (const char of s1) {
    obj1[char] ? obj1[char]++ : (obj1[char] = 1);
  }

  for (const char of s2) {
    obj2[char] ? obj2[char]++ : (obj2[char] = 1);
  }

  for (const key in obj1) {
    if (obj2[key]) {
      if (obj1[key] <= obj2[key]) {
        count += obj1[key];
      } else {
        count += obj2[key];
      }
    }
  }

  return count;
};
console.log(commonCharacterCount('aabcc', 'adcaa')); //3
console.log(commonCharacterCount('zzzz', 'zzzzzzz')); //4
*/

//8️⃣ ============ code signal ->isLucky ================
/*Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first half of
the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
*/

// const isLucky = function (num) {
//   const str = num + '';
//   const firstPart = str.slice(0, str.length / 2);
//   const secondPart = str.slice(str.length / 2);
//   let sum = 0;
//
//   for (const num of firstPart) {
//     sum += +num;
//   }
//   for (const num of secondPart) {
//     sum -= +num;
//   }
//
//   return sum === 0;
// };
//
// console.log(isLucky(1230)); //true
// console.log(isLucky(239017)); //false

//
// const obj = new Object();//using Object Constructor function;
//
// const obj1 = {};//using object literal;
//
// const obj2 = Object.create(null);// using object create method;
// function Obj3(name){
//     this.name = name;
//     this.age = 21;
// }
//
// const user = new Obj3('Anush');//using function constructor;
//
// class Obj4 {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// const user1 = new Obj4('Anush');

//================
// function foo(){
//     const shoots = [];
//
//     let i = 0;
//     while(i < 10){
//         function shoot() {
//             console.log(i);
//         }
//
//         shoots.push(shoot);
//         i++;
//
//     }
//
//     return shoots;
// }
//
// foo()[9](); //
// foo()[4](); //

// const print = data => {
//     console.log(data);
// }
//
// const job = state => {
//     return new Promise((resolve, reject) => {
//         if(state){
//             resolve("success")
//         } else {
//             reject("error")
//         }
//     })
// }
//
// const promise = job(true);
//
// promise
//     .then(data => {
//         print(data);
//         return job(false)
//     })
//     .catch(data => {
//         print(data);
//         return "Error Occurred";
//     })
//     .then(data => {
//         print(data);
//         return job(true);
//     })
//     .catch(data => {
//         print(data);
//         return job("false");
//     })

//=====
// greeting();
// var greeting = function(){
//     console.log('first greeting!');
// }
// greeting();
// function greeting(){
//     console.log('second greeting!')
// }
//
// greeting();

//=======
// var a = 'John Doe';
// var obj7 = {
//     a: 'test1',
//     prop:{
//         a: 'test2',
//         getFullName: function(){
//             return this.a;
//         }
//     },
//     getMyName(){
//         return this.a;
//     },
//     getFirstName: () => {
//         return this.a.split(' ')[0];
//     },
//
//     getLastName: (function(){
//         return this.a.split(' ')[1]
//
//     })()
// }
// console.log(obj7.prop.getFullName());
// console.log(obj7.getMyName());
// console.log(obj7.getFirstName());
// console.log(obj7.getLastName);

//--------------
// let counter = function(){
//     let k = 0;
//     return () => k++;
// };
// console.log(counter()());

//=============
// function ObjectConstructor(){
//     this.foo = 'object constructor';
// }
//
// const obj45 = new ObjectConstructor();
//
// const obj67 = Object.create(null);
//
// console.log(obj45, '-----');
// console.log(obj67, '=====');

// console.log(true && '' && 0);
//
// const num = new Number(34);
//
// console.log(num);

//========
// var x = 1;
// if(function f(){}){
//     x += typeof f;
//
// }
// console.log(x)
//
// const newMap = new Map();
// console.log(typeof newMap);
//
// const fnc = (function(x, y){return x + y})(2, 3);
// console.log(fnc);

//=========
// const data = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
//     {id: 1, name: 'c'},
//     {id: 1, name: 'd'},
//     {id: 3, name: 'e'},
//     {id: 2, name: 'f'},
//     {id: 1, name: 'g'},
//     {id: 6, name: 'h'},
//     {id: 2, name: 'i'},
//     {id: 4, name: 'j'},
//     {id: 7, name: 'k'},
//     {id: 1, name: 'l'},
//     {id: 3, name: 'm'},
//     {id: 1, name: 'n'},
//     {id: 8, name: 'o'},
//     {id: 1, name: 'p'},
//     {id: 4, name: 'q'},
//     {id: 7, name: 'r'},
// ];

// const resumeObj = function(arr){
//     const uniqueIds = [...new Set(arr.map(obj => obj.id))]
//     const result = [];
//     for(let num of uniqueIds){
//         const nameArr = arr.filter(obj => obj.id === num).map(obj => obj.name);
//         result.push({id: num, name: nameArr})
//     }
//     return result;
// }
// console.log(resumeObj(data));

//  [
//     {id: 1, name: ['a', 'c', 'd', 'g', 'l', 'n', 'p']},
//     { id: 2, name: [ 'b', 'f', 'i' ] },
//     { id: 3, name: [ 'e', 'm' ] },
//     { id: 6, name: [ 'h' ] },
//     { id: 4, name: [ 'j', 'q' ] },
//     { id: 7, name: [ 'k', 'r' ] },
//     { id: 8, name: [ 'o' ] }
// ];

//==========
// const sumOfN = function(n){
//     const arrOfSum = [];
//     for (let i = 0; i < Math.abs(n) + 1 ; i++) {
//         let sum = 0;
//         for(let j = 0; j <= i; j++){
//            n > 0 ? sum += j : sum += -j;
//         }
//         arrOfSum.push(sum);
//     }
//     return arrOfSum;
// }
// console.log(sumOfN(3));//[0, 1, 3, 6];
// console.log(sumOfN(-4));// [0, -1, -3, -6, -10]
// console.log(sumOfN(1));// [0, 1]

//===========
// const generateInt = function(n){
//     //return Array.from({length: n + 1}, (_, i) => i);
//
//     //return [...Array(n + 1).keys()]
//
//     const arr = [];
//     arr.length = n + 1;
//     return [...arr.keys()];
// }
// console.log(generateInt(3));//[0, 1, 2, 3]

//==========
//function findMultiples(integer, limit) {
     //const arrLength = Math.floor(limit / integer);
     //1
    //return Array.from({length: arrLength}, (_, i)=> (i + 1) * integer);
    //2
    // const arr = [];
    // arr.length = arrLength;
    // return [...arr.keys()].map(i => (i + 1) * integer);
    //3
    // const arr = [];
    // for(let i = 0; i < arrLength; i++){
    //     arr.push(integer * (i + 1));
    // }
    // return arr;
    //4
    // const arr = [];
    // for(let i = integer; i <= limit; i += integer){
    //     arr.push(i);
    // }
    // return arr;
//}

// console.log(findMultiples(5, 25));//[5, 10, 15, 20, 25]
// console.log(findMultiples(1, 2));// [1, 2]
// console.log(findMultiples(5, 7));// [5]
// console.log(findMultiples(4, 27));// [4, 8, 12, 16, 20, 24])

//===============
// const allNonConsecutive = function(arr){
//     const newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] + 1 !== arr[i + 1]){
//             newArr.push({i: i + 1 , n: arr[i + 1]})
//         }
//     }
//     return newArr.slice(0, -1);
// }
// console.log(allNonConsecutive([1,2,3,4,6,7,8,10]));//[{i: 4, n:6}, {i: 7, n:10}]

//============
// class Person {
// }
//
// class Employee extends Person {
//     constructor() {
//         super();
//     }
// }
//
// class Developer extends Employee {
//     constructor() {
//         super();
//     }
// }
//
// const tom = new Developer();
// console.log(Object.getPrototypeOf(tom) === Developer.prototype); // true
// console.log(Object.getPrototypeOf(tom) === Employee.prototype); // false
// console.log(Developer.isPrototypeOf(tom)); // false
// console.log(Developer.prototype.isPrototypeOf(tom)); // true
// console.log(Employee.prototype.isPrototypeOf(tom)); // true
// console.log(Person.prototype.isPrototypeOf(tom)); // true
// console.log(Object.prototype.isPrototypeOf(tom)); // true

//=========
// function doubles(s){
//     let arrOfString = [...s];
//     let arr = [];
//     for(let char of arrOfString){
//         if(arr.length !== 0 && arr[arr.length - 1] === char){
//             arr.pop();
//         }else {
//             arr.push(char)
//         }
//     }
//    return arr.join('');
// }
//
// console.log(doubles('abbcccdddda'))//'aca'
// console.log(doubles('abbbzz'));//'ab'
// console.log(doubles('zzzzykkkd'))//'ykd'
// console.log(doubles('vvvvvoiiiiin'))//'voin'

//===========
// const data = {1: 'asa', 2:'ere', 3: 'there'};
// console.log(Object.entries(data));
// //convert object to map
// const mapData = new Map(Object.entries(data));
// mapData.set([1, 2], 'hello');
// console.log(mapData);
//
// for(const [key, value] of mapData){
//     console.log(key, value)
//
// }
// console.log(mapData.get('2'));

//=========
// const tests = new Map();
// tests.set(() => 2+2, 4);
// tests.set(() => 2*2, 4);
// tests.set(() => 2/2, 1);
//
// for(const item of tests){
//     console.log(item[0]() === item[1] ? 'Pass' : 'fail');
//}

//======
// let randomObj = {1: 'hello'};
// const newMap = new Map();
// newMap.set(randomObj, true);
// console.log(newMap.get(randomObj));
// randomObj = undefined;
// console.log(newMap.get(randomObj), newMap);

//======
// const findMin = function(arr){
//     //1
//     let first = arr[0][1];
//     for (let i = 1; i < arr.length ; i++) {
//         if(arr[i][1] < first){
//             first = arr[i][1];
//         }
//     }
//     return first;
    //2
    // const numArr = [];
    // for(const [, num] of arr){
    //     numArr.push(num);
    //
    // }
    // return Math.min(...numArr);
    //3
    // const first = arr[0][1];
    // const second = arr[1][1];
    // const three = arr[2][1];
    // return Math.min(first, second, three);
    //4
    // const nums = arr.map(el => el[1]);
    // return Math.min(...nums);
    //5
   // return arr.reduce((min, num) => min < num[1] ? min : num[1], arr[0][1]);
//}

//console.log(findMin([['a', 2], ['b', 10], ['c', 60]]));

//=============
// var firstName = 'Aram';
//
// const user34 = {
//     firstName: 'Anush',
//     year: 1991,
//     calcAge () {
//         //console.log(this);//user{}
//         console.log(2021 - this.year); //30
//     },
//
//     greet: () => {
//
//         //console.log(this); //window object
//         console.log(this.firstName); //undefined || var firstName = 'Aram'; will calling as window.firstName = 'Aram'
//     },
// };
// user34.calcAge();
// user34.greet();

//=========
// var x = 22;
//
// const objNew = {
//     x: 55,
//     bar: {
//         x: 6,
//         baz: function() {
//             return this.x;
//         }
//     }
// }
// const foo = objNew.bar.baz;
//
// //console.log((foo()));
// console.log((objNew.bar.baz()));

//========
// var x = 10
// const obj = {
//     x: 20,
//     foo: function() {
//         setTimeout(() => {
//             console.log(this.x)
//         }, 0)
//     }
// }
// obj.foo();

//======
// const person = { name: "Davit" };
//
// Object.defineProperty(person, "age", { value: 21, writable: true });
//
// console.log(person);
// console.log(Object.keys(person));

//=========
Promise.resolve()
    .then(() => {
        setTimeout(() => {
            console.log('setTimeout 1')
        }, 0)
    })
    .then(() => {
        console.log('then')
    })

setTimeout(() => {
    console.log('setTimeout 2')
}, 0)

//===============
// let config = {
//     alert: setInterval(() => {
//         console.log('Hello Wolrd!')
//     }, 1000)
// }

//config = null

