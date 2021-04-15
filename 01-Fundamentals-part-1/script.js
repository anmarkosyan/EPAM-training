'use strict';

//===================== 🔴 Variables and types ===================
//📍var, let and cost
// var x = 1;
// var x = 2;
// console.log(x); //2  => ✅ in this case it's allow us to declare two VAR with the same name --> without syntaxError:

// let y = 2;
// let y = 3;
// console.log(y);// ❗️SyntaxError: Identifier 'y' has already been declared => can't declared  2 variables with the same name

// const b = 2;
// //b = 4; // ❗️TypeError: Assignment to constant variable.
//
// const refType = [1, 2, 3];
// refType[0] = 4;// ✅ for all reference types --> array, object literal, function..
// console.log(b, refType);//2 immutable only for primitive types, can mutate for reference types

// 📍DATA TYPES
// 1️⃣ Numbers
// let num1 = 123;
// let num2 = 1.4;
// let num3 = -4;
// let num4 = Infinity;
// let num5 = NaN;
// let num6 = -Infinity;

//2️⃣ Strings
// let str1 = 'Hello 1';
// let str2 = "Hello 2";
// let str3 = `Hello 3`; => template string

//3️⃣ Boolean
// let bool1 = true;
// let bool2 = false;

//4️⃣ Null => typeof === object;
// let nu = null;
// let name = null;
// name = 12;
// console.log(name);

// 5️⃣ Undefined => Value is not defined yet
// let und = undefined;
// let age;
// console.log(age); //undefined

// 6️⃣ BigInt => if integer is larger then this number it means it NOT SAFE, cannot represented accurately
// let bigI = 2 ** 53 - 1;
// console.log(bigI); //9007199254740991
//console.log(Number.MAX_SAFE_INTEGER);//9007199254740991

//7️⃣ Symbol => Value that is uniq and cannot be changed
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');
// console.log(sym2 === sym3);//false => It creates a new Symbol each time:

//statement vs expression
//
// // operator => operand
// // 1+1  => binary => have 2 operands
// // i++ => unary => have 1 operand
// // ternary operator => 3 operand
// // comparative operator =>  x > y;
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
//
// //math operator
// let x = '4';
// let y = '2';
// console.log(typeof (x - y));//2
// console.log(Number('2er'));//NaN
// console.log(x + y);//concat
//
// //reminder operator
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

//========================= 👩🏻‍💻 coding challenge ==========================
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

//2️⃣ task:
/*
Create a flow like this, user should input first name, last name, age, city and alert string like this:
"John Doe, 18 years old, from Yerevan"
*/
// const firstName = prompt("Please, fill your first name.", "first name");
// const lastName = prompt("Please, fill your last name", "last name");
// const age = prompt("Please, fill your age", "your age");
// const city = prompt("Please, fill your city", "city");
// alert(`${firstName} ${lastName}, ${age} years old, from ${city}`);

//3️⃣ task:
//Create flow like this, user should input a number and the program should alert is number odd or even
// const num = +prompt(
//   "This test is for checking if number even or odd!",
//   "random number"
// );
// alert(`${num % 2 === 0 ? "This is even number" : "This is odd number"}`);
