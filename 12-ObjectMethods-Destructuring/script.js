'use strict';

//============================== 🔴 Lecture part ============================
//✅ destructuring
/*
const obj = { name: 'Anush', age: 34 };
//❗️console.log(...obj);//TypeError: Found non-callable @@iterator
//❗️console.log(`${...obj}`);//SyntaxError: Unexpected token '...'
const obj1 = { ...obj };
console.log(obj1); //{ name: 'Anush', age: 34}
console.log({ ...obj });

const arr = [1, 2, 3];
console.log(...arr); //1 2 3

const str = 'qwe';
const str1 = [...str];
const str2 = { ...str };
console.log(...str); //q w e
console.log(str1); //['q', 'w', 'e'];
console.log(str2); //{ '0': 'q', '1': 'w', '2': 'e' }

const set = new Set([1, 2, 3, 1, 2]);

console.log(...set); //1 2 3

const map = new Map([
  ['name', 'Aram'],
  ['age', 12],
]);
console.log(...map); //['name', 'Aram'] ['age', 12 ]
 */
//========================= 👩🏻‍💻 coding challenges =========================
//🏋🏻‍♀️
/*
Create a vehicle object with the following properties using function constructor:
-model
-manufacturer
-country
-power
-run
-fuel consumption
-color
-tiers object consists of these properties
         o qty
         o  diameter
         o  model
         o  run
Function constructor should get one argument as an object.
All the bold italic properties should be optional (you should assign default values for them).
Use object destructuring  in function argument and initialize vehicle (this) object.

Add a method for the object called getTiersInfo which should return a descriptive string
consist of destructured properties about tiers nested object.

 You can also add a couple of other methods using destructuring (up to you :))
*/

// const Vehicle = function (model, manufacturer, country, run, power, fuelConsumption, color, ...arg) {
//   this.carModel = model;
//   this.manufacturer = manufacturer;
//   this.country = country;
//   this.power = power;
//   this.run = run || 90;
//   this.fuelConsumption = fuelConsumption || 'petrol';
//   this.color = color;
//   this.tiers = { ...arg };
//
//   this.getTiersInfo = function () {
//     const {tiers: { 0: qty, 1: diameter, 2: model, 3: run }} = this;
//      return `🚙 Car description: \n ${this.carModel} - ${model}\n manufacturer: ${this.manufacturer} \n country: ${this.country}\n color: ${this.color} \n diameter: ${diameter}\n quantity: ${qty}\n run: ${run}`;
//   };
// };
// const miniCooper = new Vehicle('Mini Cooper', 'England', 'Netherlands', undefined, 120.7, undefined, 'chestnut', 1, 65, 'K10', 120);
// const lexus = new Vehicle('Lexus', 'Japan', 'Japan', 120, 130, 'hybrid', 'amber shine', 1, 90, 'RX 350', 160);
// console.log(miniCooper);
//console.log(lexus);
// console.log(miniCooper.getTiersInfo());
// console.log(lexus.getTiersInfo());

//2way:
/*
const Vehicle = function (...arg) {
  const obj = { ...arg };
  const { 0: model, 1: manufacturer, 2: country, 3: run = 90, 4: power, 5: fuelConsumption = 'petrol', 6: color, ...others } = obj;
  this.carModel = model;
  this.manufacturer = manufacturer;
  this.country = country;
  this.power = power;
  this.run = run;
  this.fuelConsumption = fuelConsumption;
  this.color = color;
  this.tiers = { ...others };

  this.getTiersInfo = function () {
    const {tiers: { 7: qty, 8: diameter, 9: model, 10: run }} = this;

     return `🚙 Car description: \n ${this.carModel} - ${model}\n manufacturer: ${this.manufacturer} \n country: ${this.country}\n color: ${this.color} \n diameter: ${diameter}\n quantity: ${qty}\n run: ${run}`;
     };
};

const miniCooper = new Vehicle('Mini Cooper', 'England', 'Netherlands', undefined, 120.7, undefined, 'chestnut', 1, 65, 'K10', 120);
const lexus = new Vehicle('Lexus', 'Japan', 'Japan', 120, 130, 'hybrid', 'amber shine', 1, 90, 'RX 350', 160);
const toyota = new Vehicle('Toyota', 'Japan', 'Japan', undefined, 160, undefined, 'black');
console.log(toyota);
console.log(miniCooper);
console.log(lexus);
console.log(miniCooper.getTiersInfo());
console.log(lexus.getTiersInfo());

 */
//3way:
const Vehicle = function ({
  carModel,
  manufacturer,
  country,
  runPow = 90,
  power,
  fuelConsumption = 'petrol',
  color,
  tiers = { qty: 1, diameter: 67, model: 'classic', run: 65 },
}) {
  this.carModel = carModel;
  this.manufacturer = manufacturer;
  this.country = country;
  this.power = power;
  this.runPow = runPow;
  this.fuelConsumption = fuelConsumption;
  this.color = color;
  this.tiers = tiers;

  this.getTiersInfo = function () {
    const { tiers: { qty, diameter, model, run }} = this;

    return `🚙 Car description: \n ${this.carModel} - ${model}\n manufacturer: ${this.manufacturer} \n country: ${this.country}\n color: ${this.color} \n diameter: ${diameter}\n quantity: ${qty}\n run: ${run}`;
  };
};
const miniCooper = new Vehicle({
  carModel: 'Mini Cooper',
  manufacturer: 'England',
  country: 'Netherlands',
  runPow: undefined,
  power: 120.7,
  fuelConsumption: undefined,
  color: 'chestnut',
  tiers: { qty: 1, diameter: 78, model: 'K10', run: 120 },
});
console.log(miniCooper);
console.log(miniCooper.getTiersInfo());
