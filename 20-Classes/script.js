'use strict';
//======================== 🔴 classes ===================
//❗️ not hoisting
// const createCar = function(){
//   return new Car();
// }


class Car{

}

const add = new Car();
console.log(add);
console.log(new Car());//TypeError: Class constructor Car cannot be invoked without 'new'
//console.log(Car);//[class Car]
//console.log(createCar());//Car {}

