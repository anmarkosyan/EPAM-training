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

//❗️ not working way, only will walk through all properties and return the last one
// const arr = [];
// for (const [key, value] of Object.entries(obj)) {
//   if (typeof value !== 'object') {
//     arr.push(`${key}: ${value}`);
//   } else {
//     arr.push(findDeeperProp(obj[key]));
//   }
// }
//
// return `${arr.flat().slice(-1)}`;

let count = 1;
function goDeeper(obj) {
  const arr1 = [];
  let entriesCount = 0;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      count++;

      return goDeeper(obj[key]);
    }
    arr1.push(`${key}: ${value}`);
  }
  entriesCount = count;
  count = 1;

  return { [arr1.slice(-1)]: entriesCount };
}

function findDeeperProp(obj) {
  const arr = [];

  const keysArr = Object.keys(obj);
  if (keysArr.length === 0) return '';
  for (const key of keysArr) {
    if (typeof obj[key] === 'object') {
      arr.push(goDeeper(obj[key]));
    }
  }

  return arr;
}
const obj = {
  a: { m: { n: 12 }, k: { t: { l: 28 } }, b: 1, c: 2 },
};
console.log(findDeeperProp(obj));
// console.log(
//   findDeeperProp({
//     a: 3,
//     l: { s: { q: { x: { f: { j: 12, p: 8 } } } } },
//     k: { b: { c: { d: { u: { j: { fg: 12, tg: 34 }, o: 9 } } } } },
//     er: { df: { sx: 34 } },
//     f: { v: 67 },
//   })
// ); //
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: { x: 5 } } }, m: { p: 34 } })); // -> 'x: 5'
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: 7 }, m: { p: 1 } } })); // -> 'p:1'
// console.log(findDeeperProp({ x: 5, y: { z: 6, k: 4, m: { p: 1 } } })); // -> 'p:1'
// console.log(findDeeperProp({ x: 3, y: { c: { b: 2 } } })); // 'b: 2'
// console.log(findDeeperProp({})); //''

//3️⃣
/*
you have number from 1 to 100 in an array const arrayOfNumbers = [5,2,77,34…]  (note without order) and there missed one item,
we need to find this missed number.
Note: you can’t plus arrayOfNumbers numbers to each other and subtract from 1-100 added result, there is expected another approach to solve it.
*/

// const findMissedNumber = function (arr) {
//   if (arr.length === 0) return arr;
//   const orderedArr = arr.slice().sort((a, b) => a - b);
//
//   for (let i = 0; i < orderedArr.length / 2; i++) {
//     if (orderedArr[i] + 1 !== orderedArr[i + 1]) {
//       return orderedArr[i] + 1;
//     }
//   }
//   return '❗️ no missed number';
// };
// console.log(findMissedNumber([6, 4, 1, 2, 7, 3])); //5
// console.log(findMissedNumber([])); //[]
// console.log(findMissedNumber([3, 4, 5, 1, 7, 2, 8, 6])); //'❗️ no missed number'
// console.log(findMissedNumber([]));
