'use strict';

//===================== 🔴 Variables and Data types ===================
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
// const bigI = 2 ** 53 - 1;
// console.log(bigI); //9007199254740991
//console.log(Number.MAX_SAFE_INTEGER);//9007199254740991

//7️⃣ Symbol => Value that is uniq and cannot be changed
// const sym2 = Symbol('foo');
// const sym3 = Symbol('foo');
// console.log(sym2 === sym3);//false => It creates a new Symbol each time:

//========================= 🔴 Operators ========================
//each side of operator called OPERAND
//1️⃣ unary operator => with one operand
// let i = 1;
// i++;
// console.log(i); //2
// console.log(++i); //3
// console.log(-i); //-3
// i = -1;
// console.log(+i); // -1❗️no effect
// i = '4';
// console.log(+i); // convert string to number

//2️⃣ binary operator => with two operands
// const a = 1;
// const b = 2;
// console.log(a + b); //3
// console.log(1 + 4); //5

//3️⃣ ternary operator => with 3 operands
// const int = 123.56;
// console.log(`${int % 1 === 0 ? 'integer number' : 'decimal number'}`);

//4️⃣ math operators
// console.log(1 + 2);
// console.log(4 - 2);
// console.log(4 * 2);
// console.log(4 / 2);

//5️⃣ reminder operator
// const isEven = n => n % 2 === 0;
// const isOdd = n => n % 2 !== 0;
// const isInteger = n => n % 1 === 0;
// console.log(isEven(23)); //false
// console.log(isEven(52)); //true
// console.log(isOdd(23)); //true
// console.log(isOdd(154)); //false
// console.log(isInteger(12.3));//false
// console.log(isInteger(123));//true

//6️⃣ concatenation operator => only work with + sign
// console.log('12' + 5); //'125' => type string -> if one of the operands is string result will always be a string
// console.log('hi' + ' ' + 'there'); // 'hi there'
// console.log(12 + 5); //17 typeof number
//
// console.log('12' - 5); //7 typeof number => will convert string operand to number
// console.log('12' / '4'); //3 type number
// console.log('12' * '2'); //24 type number

//7️⃣ comparison operators
const x = 5;
const y = 7;
console.log(x < y);
console.log(x > y);
console.log(x >= y);
console.log(x <= y);



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

// //math operator
// let x = '4';
// let y = '2';
// console.log(typeof (x - y));//2
// console.log(Number('2er'));//NaN
// console.log(x + y);//concat
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

console.log('-----------');

// console.log("string" <- typeof "number" <- typeof x)

// const k = String(`hi`)
// const z = Number(6)
// const l = Boolean(" ")
// console.log(k)
// console.log(z)
// console.log(l)

// let x = "5";
// let y = 10;
// console.log(Number("hello"))
// const o = y - x;
// console.log(typeof o)
// console.log(y / x);
// console.log(y * x);
// console.log(y ** x);
// console.log(y)

// let x = "10";
// let y = 10;
// console.log(x == y);
// console.log(x === y);

// let x = "a";
// let y = "A";
// "B" -> 101
// "A" -> 100
// "b" -> 1
// "a" -> 0
// console.log(x > y);
// console.log(1+"")

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
