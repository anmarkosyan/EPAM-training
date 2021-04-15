"use strict";
console.log("hello world!");

// var x = 1;
// var x = 2;
//
// let y = 2;
// //let y = 3;// can't be 2 variables
//
// const b = 2;
//
// //numbers
// let num1 = 12;
// let num2 = 12.4;
// let num3 = NaN;
// let num4 = Infinity;
// let num5 = -Infinity;
//
// //string
// let str1 = 'hi';
// let str2 = "hi";
// let str3 = `hi`;
//
// //boolean
// let bo1 = true;
// let bo2 = false;
//
// //null
// let nu = null;// for check diff between null and undefined;
//
// //undefined
// let und = undefined;//no
//
// //bigInt
// let big = 2e4;

//statement vs expression

//operator => operand
//1+1  => binary => have 2 operands
//i++ => unary => have 1 operand
//ternary operator => 3 operand
//comparative operator =>  x > y;
// const x1 = 5;
// const y1 = 6;
// console.log(x1 < y1);//true
// console.log(x1 >= y1);//false
// //typeof operator
// console.log(typeof x1);//'number'
// console.log(typeof typeof x1);// 'string'
// console.log(String('hi'));//'hi'
// console.log(Number(123));//123
// console.log(Boolean(true));
// console.log(Boolean(' '))//true

//math operator
// let x = '4';
// let y = '2';
// console.log(typeof (x - y));//2
// console.log(Number('2er'));//NaN
// console.log(x + y);//concat

//modules operator
// console.log(10 % 5);
//
// //equal operator
// let x = 4;
// let y = 2;
// console.log(x == y);
// console.log(x === y);
// console.log( 'a' > 'b'); // true
// console.log('aab' > 'aaa');//true
// console.log('A' > 'a');//false
//
// //functions
// //alert('HI there!');//
// prompt('how are you?');
// confirm('HI there');

//========================= 👩🏻‍💻 code challenge ==========================
//1️⃣ task:
/*
alert('This is math calc');
const firstVal = +prompt('Type  number');
const secondOp = prompt('Type operator');
const thirdVal = +prompt('Type second number');

if(secondOp === '+') alert(firstVal + thirdVal);
else if(secondOp === '-') alert(firstVal - thirdVal);
else if(secondOp=== '*') alert(firstVal * thirdVal);
else if(secondOp === '/') alert(firstVal / thirdVal);
*/

//1️⃣ task:
/*
Create a flow like this, user should input first name, last name, age, city and alert string like this:
"John Doe, 18 years old, from Yerevan"
*/
const firstName = prompt("Please, fill your first name.", "first name");
const lastName = prompt("Please, fill your last name", "last name");
const age = prompt("Please, fill your age", "your age");
const city = prompt("Please, fill your city", "city");
alert(`${firstName} ${lastName}, ${age} years old, from ${city}`);

//2️⃣ task:
//Create flow like this, user should input a number and the program should alert is number odd or even
const num = +prompt(
  "This test is for checking if number even or odd!",
  "random number"
);
alert(`${num % 2 === 0 ? "This is even number" : "This is odd number"}`);
