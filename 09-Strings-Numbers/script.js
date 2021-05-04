'use strict';

const calculate = function (str) {
 return (eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString());


};
// console.log(calculate('1plus2plus3plus4')); //'10'
// console.log(calculate('1minus2minus3minus4')); //'-8'
//console.log(calculate('1plus2plus3minus4'));// 2

//primitive types methods
const number = 1_000_000_00;
const number1 = 1e8;
const number2 = 1.234667;
console.log(number2.toFixed(3));
console.log(number);
console.log(number1);
//toPrecision => number
