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
function goDeeper(obj, count = 1) {
  const arr = [];

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      if (count === undefined) {
        return count;
      }
      return goDeeper(obj[key], count++);
    }
    arr.push(`${key}: ${value}`);
  }

  return `${arr.slice(-1)}`;
}

function findDeeperProp(obj) {
  const objKeys = Object.keys(obj);
  if (objKeys.length === 0) return '';

  for (const key of objKeys) {
    if (typeof obj[key] === 'object') {
      return goDeeper(obj[key]);
    }
  }
}

const obj = {
  a: 3,
  k: { b: { c: { d: { u: { j: { fg: 12, tg: 34 }, o: 9 } } } } },
  l: { s: { q: { x: { f: { j: 12, p: 8 } } } } },
  er: { df: { sx: 34 } },
  f: { v: 67 },
};

console.log(findDeeperProp(obj)); //
console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: { x: 5 } } }, m: { p: 1 } })); // -> 'x: 5'
console.log(findDeeperProp({ x: 5, y: { z: 6, k: { l: 7 }, m: { p: 1 } } })); // -> 'p:1'
console.log(findDeeperProp({ x: 5, y: { z: 6, k: 4, m: { p: 1 } } })); // -> 'p:1'
console.log(findDeeperProp({ x: 3, y: { c: { b: 2 } } })); // 'b: 2'
console.log(findDeeperProp({})); //''
