'use strict';
const calc = function () {
  //global EC was declared
  let num = 0; // creation phase + variable env declare let num: 1 => 2 => 3

  return function count() {
    // execution phase finish run
    return num++ * 2; // execution phase, take num from parent scope and use that num value; 1 * 2 => 2 * 2 => 3 * 2
  };
};
const multi = calc(); //start FEC and creation phase
console.log(multi()); //start FEC
console.log(multi()); //start FEC
console.log(multi()); //start FEC
console.log(multi());
