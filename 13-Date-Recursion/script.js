'use strict';
//============================= 🔴 lecture part ========================
//3️⃣ recursion
//📍 A function that calls itself
// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('All done!');
//
//   // if (num <= 0) {
//   //   console.log('All done!');
//   //   return;
//   // }
//   // console.log(num);
//   // num--;
//   // countDown(num);
// }
// countDown(5);
//
// //========
// function collectOddValues(arr) {
//   let result = [];
//
//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }
//
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }
//
//     helper(helperInput.slice(1));
//   }
//
//   helper(arr);
//
//   return result;
// }
//
// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//============================ 👩🏻‍💻 coding challenge ==================
//1️⃣
/*
Implement the function, that should return true if every parenthesis has own closed part, ex: ( has )
*/
/*
function checkParentheses(str) {
  let count1 = 0;
  let count2 = 0;
  if (str.length === 0) return false;

  for (const el of str) {
    if (el === '(') {
      count1++;
    } else {
      count2++;
    }
  }
  return count1 === count2;
}

console.log(checkParentheses('(())((()))()')); // -> true
console.log(checkParentheses('(())((()))(')); // -> false
console.log(checkParentheses('(())((())')); // -> false
console.log(checkParentheses('()')); // -> true
console.log(checkParentheses('(')); // -> false
console.log(checkParentheses('')); // false
 */
//2️⃣
/*
Write a function that finds last deeper property of the object and return as a string, using recursion.
*/
// let counter = 0;
// const findDeeperProp = function (obj) {
//   const keysArr = Object.keys(obj);
//   let innerCounter;
//   const valueArr = [];
//
//   if (keysArr.length === 0) return '';
//
//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value === 'object') {
//       counter++;
//       findDeeperProp(obj[key]);
//     } else {
//
//       valueArr.push(`${key}: ${value}`);
//     }
//     innerCounter = counter;
//     counter = 1;
//     console.log(counter);
//   }
//   return valueArr;
// };
//
// console.log(
//   findDeeperProp({
//     a: 3,
//     l: { s: { q: { x: { f: { j: 12, p: 8 } } } } },
//     k: { b: { c: { d: { u: { j: { fg: 12, tg: 34 }, o: 9 } } } } },
//     er: { df: { sx: 34 } },
//     d: { v: 67 },
//   })
// );
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: { x: 5 } } }, m: { p: 34 } })); // -> 'x: 5'
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: 7 }, m: { p: 1 } } })); // -> 'p:1'
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: 4, m: { p: 1 } } })); // -> 'p:1'
// console.log(findDeeperProp({ x: 3, y: { c: { b: 2 } } })); // 'b: 2'
// console.log(findDeeperProp({})); //''
/*
let count1 = 0;
let count2 = 0;

function goDeeper(obj) {
  const arr1 = [];
  let str = '';
  let entriesCount = 0;


  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      arr1.push(key);
    }
  }
 const [left, right] = arr1;

  return obj[left];

// return str;
}
function findDeeperProp(obj) {
  const arr = [];
  const keysArr = Object.keys(obj);
  if (keysArr.length === 0) return '';

  for (const key of keysArr) {
    //console.log(key); //a
    if (typeof obj[key] === 'object') {
      return goDeeper(obj[key]);
    }
  }

  //return arr;
}
console.log(
  findDeeperProp({
    a: { m: { n: 12 }, k: { t: { l: 28 } }, b: 1, c: 2 },
  })
);

//
// console.log(
//   findDeeperProp({
//     a: 3,
//     l: { s: { q: { x: { f: { j: 12, p: 8 } } } } },
//     k: { b: { c: { d: { u: { j: { fg: 12, tg: 34 }, o: 9, l: { g: 56 } } } } } },
//     er: { df: { sx: 34 } },
//     f: { v: 67 },
//   })
// );
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: { x: 5 } } }, m: { p: 34 } })); // -> 'x: 5'
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: 7 }, m: { p: 1 } } })); // -> 'p:1'
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: 4, m: { p: 1 } } })); // -> 'p:1'
// console.log(findDeeperProp({ x: 3, y: { c: { b: 2 } } })); // 'b: 2'
// console.log(findDeeperProp({})); //''
// console.log(
//   findDeeperProp({
//     a: { b: 2, c: { d: 4, e: 7 }, t: { e: 12, j: 34 } },
//   })
// );
// let counter = 1;
// const findDeeperProp = function (obj) {
//   const arr = [];
//   let node;
//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value === 'object') {
//       node = key;
//       arr.push(node);
//       findDeeperProp(obj[key]);
//     }
//   }
//
//   return arr;
// };
console.log(
  findDeeperProp({
    a: { m: { n: 12 }, k: { t: { l: 28 } }, b: 1, c: 2 },
  })
);
 */
//3️⃣
/*
you have number from 1 to 100 in an array const arrayOfNumbers = [5,2,77,34…]  (note without order) and there missed one item,
we need to find this missed number.
Note: you can’t plus arrayOfNumbers numbers to each other and subtract from 1-100 added result, there is expected another approach to solve it.
*/
// if (arr.length === 0) return arr;
// const orderedArr = arr.slice().sort((a, b) => a - b);
//
// for (let i = 0; i < orderedArr.length - 1; i++) {
//   if (orderedArr[i] + 1 !== orderedArr[i + 1]) {
//     return orderedArr[i] + 1;
//   }
// }
// return '❗️ no missed number';
//2 way://Time complexity 0(N)/0(1)
// const n = arr.length + 1;
// let sum = 0;
//
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);//10
// arr.forEach(function(num){
//   sum -= num;
//
// })
// return sum;

//3way: XOR logic operator
const findMissedNumber = function (arr) {
  const maxNum = arr.length + 1;
  //find sum of all numbers with comparing digits from 1 to given array length + 1
  let xor1 = 1;
  for (let i = 2; i <= maxNum; i++) {
    xor1 = xor1 ^ i;
  }

  //find sum of all numbers with comparing from a first num until the last number of a given array
  let xor2 = arr[0];
  for (let i = 1; i < maxNum - 1; i++) {
    xor2 = xor2 ^ arr[i];
  }

  //and finally compare the two results,
  return xor1 ^ xor2;
};

console.log(findMissedNumber([2, 3, 1, 5, 6, 7])); //4
console.log(findMissedNumber([5, 2, 3, 1, 4, 7, 8, 10, 9, 13, 12, 11, 14])); //6

// function goDeeper(obj, count = 1) {
//   const arr = [];
//
//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value === 'object') {
//       if (count === undefined) {
//         return count;
//       }
//       return goDeeper(obj[key], count++);
//     }
//     arr.push(`${key}: ${value}`);
//   }
//
//   return `${arr.slice(-1)}`;
// }
//
// function findDeeperProp(obj) {
//   const keysArr = Object.keys(obj);
//   if (keysArr.length === 0) return '';
//
//   for (const key of keysArr) {
//     if (typeof obj[key] === 'object') {
//       return goDeeper(obj[key]);
//     }
//   }
// }
//
// const obj = {
//   a: 3,
//   k: { b: { c: { d: { u: { j: { fg: 12, tg: 34 }, o: 9 } } } } },
//   l: { s: { q: { x: { f: { j: 12, p: 8 } } } } },
//   er: { df: { sx: 34 } },
//   f: { v: 67 },
// };
//
// console.log(findDeeperProp(obj)); //
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: { x: 5 } } }, m: { p: 1 } })); // -> 'x: 5'
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: 7 }, m: { p: 1 } } })); // -> 'p:1'
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: 4, m: { p: 1 } } })); // -> 'p:1'
// console.log(findDeeperProp({ x: 3, y: { c: { b: 2 } } })); // 'b: 2'
// console.log(findDeeperProp({})); //''
