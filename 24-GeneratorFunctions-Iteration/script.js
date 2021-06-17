'use strict';
//==================== 🔴 lecture part ================
// function* generatorFnc() {
//   //generator function
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// const generatorObject = generatorFnc(); //will create generator object
// console.log(generatorObject); //Object [Generator] {}
//
// //console.log(generatorObject.next().value);//1 => { value: 1, done: false }
//
// //📍 this is more nicer then next().value
// for (const number of generatorObject) {
//   console.log(number);
// }
//
// //📍 also can do like this
// const iterables = [...generatorFnc()];
// console.log(iterables); //[1, 2, 3]

//=================== 🔴 coding challenges ===========
//1️⃣
// function* generator(){
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const objectGenerator = generator();
// console.log(objectGenerator.next());//{ value: 1, done: false }
//========

// function* generator() {
//   for (let i = 1; i <= 5; i++) {
//     yield i;
//   }
// }
// //const iter = [...generator()];
// const iter = generator();
// for (const number of iter) {
//   console.log(number);
// }

//======
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 1; i <= this; i++) {
    yield* eachNum(i);
  }
};
// const even = [...5].filter(n => n % 2 === 0);
// console.log(even);

const eachNum = function* (num) {
  if (num % 2 === 0) yield num;
};

console.log([...5]); //[2, 4]


