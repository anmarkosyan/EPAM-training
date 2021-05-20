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
const isObject = function (val) {
  if (val === null) return false;
  return typeof val === 'object';
};

const globalTree = function () {
  let maxNode = 0;
  let leafValue = '';

  return function findLeaf(node, count = 0, val) {
    if(Object.keys(node).length === 0) return {};
    let nodeCount = count;
    leafValue = val;

    for (const [key, value] of Object.entries(node)) {
      if (isObject(value)) {
        leafValue = findLeaf(node[key], nodeCount + 1, leafValue);
        // console.log(leafValue);
        //console.log(nodeCount, `${key} ${value}`);
      } else {
        if (nodeCount >= maxNode) {
          maxNode = nodeCount;
          //console.log(maxNode, `${key} ${value}`);
          leafValue = `${key} ${value}`;
        }
      }
    }

    return leafValue;
  };
};

const tree = globalTree();
console.log(
  tree({
    a: { m: { n: { f: 12 } }, k: { t: { l: { s: { r: 28 } } } }, b: { w: 1 }, c: { o: 2 } },
    b: { c: { f: 23 }, g: { r: 45 } },
  })
);
const tree1 = globalTree();
console.log(tree1({ x: 5, y: { z: 6, k: { l: { x: 5 } } }, m: { p: 34 } })); // -> 'x: 5'
const tree2 = globalTree();
console.log(tree2({ x: 5, y: { z: 6, k: { l: 7 }, m: { p: 1 } } })); // -> 'p:1'
const tree3 = globalTree();
console.log(tree3({ x: 5, y: { z: 6, k: 4, m: { p: 1 } } })); // -> 'p:1'
const tree4 = globalTree();
console.log(tree4({ x: 3, y: { c: { b: 2 } } })); // 'b: 2'
const tree5 = globalTree();
console.log(tree5({})); //''

//3️⃣
/*
you have number from 1 to 100 in an array const arrayOfNumbers = [5,2,77,34…]  (note without order) and there missed one item,
we need to find this missed number.
Note: you can’t plus arrayOfNumbers numbers to each other and subtract from 1-100 added result, there is expected another approach to solve it.
*/
//const findMissedNumber = function (arr) {
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
//   const maxNum = arr.length + 1;
//   //find sum of all numbers with comparing digits from 1 to given array length + 1
//   let xor1 = 1;
//   for (let i = 2; i <= maxNum; i++) {
//     xor1 = xor1 ^ i;
//   }
//
//   //find sum of all numbers with comparing from a first num until the last number of a given array
//   let xor2 = arr[0];
//   for (let i = 1; i < maxNum - 1; i++) {
//     xor2 = xor2 ^ arr[i];
//   }
//
//   //and finally compare the two results,
//   return xor1 ^ xor2;
// };
//
// console.log(findMissedNumber([2, 3, 1, 5, 6, 7])); //4
// console.log(findMissedNumber([5, 2, 3, 1, 4, 7, 8, 10, 9, 13, 12, 11, 14])); //6
