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
// let str4 = new String("A String object");

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
// const x = 5;
// const y = 7;
// console.log(x < y);
// console.log(x > y);
// console.log(x >= y);
// console.log(x <= y);
// console.log('A' > 'a'); //false
// console.log('a' > 'b'); // false
// console.log('aab' > 'aaa'); //true

//8️⃣ equality comparisons
//📍abstract equality or double equal == // value should be equal
//📍strict equality or triple equal ===  // value and type should be equal
// const num = 0;
// const obj = new String('hi there how are you'); //{'0'}
// const str = '0';
//
// console.log(num == str);//true
// console.log(num === num); // true
// console.log(obj === obj); // true
// console.log(str === str); // true
//
// console.log(num === obj); // false
// console.log(num === str); // false
// console.log(obj === str); // false
//
// console.log(null === undefined); // false
// console.log(obj === null); // false
// console.log(obj === undefined); // false
// console.log(NaN === NaN);//false

//9️⃣ Type conversion for primitives
let value = true;
console.log(typeof value); // 'boolean' => typeof is always return type in string format
console.log(typeof typeof value); // 'string'

//📍String conversion
value = 1234;
console.log(String(value)); // '1234' -> typeof string
console.log(123 + ''); //'123'

//📍Number conversion
console.log(Number('  123   ')); // 123 typeof number
console.log(Number('hello')); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(+'12.23'); //12.23
console.log(+'12.3abc'); // NaN

//using parsing GLOBAL functions
console.log(Number.parseInt('12.23abc', 10)); //12 => will return an integer
console.log(Number.parseInt('e12.3abc', 10)); //NaN => string should start with number

console.log(Number.parseFloat('    12.3abc    ')); // 12.3 => ignore whitespaces
console.log(Number.parseFloat('    12er       ')); //12  => ignore whitespaces

//📍Boolean conversion
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(!!' '); //true
console.log(!!''); //false

//========================= 👩🏻‍💻 coding challenge ==========================
//1️⃣ task:
alert('This is math calculation!');
const firstNum = +prompt('Type  number');
const mathOp = prompt('Type operator');
const secondNum = +prompt('Type second number');
//1 way
// if (mathOp === '+') alert(`The result is ${firstNum + secondNum}`);
// else if (mathOp === '-') alert(`The result is ${firstNum - secondNum}`);
// else if (mathOp === '*') alert(`The result is ${firstNum * secondNum}`);
// else alert(`The result is ${firstNum / secondNum}`);

//2 way
alert(
  `The result is ${
    mathOp === '+' ? firstNum + secondNum : mathOp === '-' ? firstNum - secondNum : mathOp === '*' ? firstNum * secondNum : firstNum / secondNum
  }`
);

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
