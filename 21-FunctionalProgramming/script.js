'use strict';

//================= 🔴 Lecture part ==================
// const pipe = function(...fns) {
//   return function  (x){
//     fns.reduce((v, f) => f(v), x);
//   }
//
// }
// const pipe = function (...fns) {
//   return function (x) {
//     return fns.reduce((v, f) => f(v), x);
//   };
// };
//
// const fn1 = s => s.toLowerCase();
// const fn2 = s => s.split('').reverse().join('');
// const fn3 = s => s + '!';
//
// const newFunc = pipe(fn1, fn2, fn3);
// const result = newFunc('Time'); // emit!
// console.log(result);
//
// const x = {
//   val: 2,
// };
//
// const x1 = x => Object.assign({}, x, { val: x.val + 1 });
//
// const x2 = x => Object.assign({}, x, { val: x.val * 2 });

//console.log(x1(x2(x)).val); // 5
//================= 🔴 coding challenges ===============
//1️⃣
// implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item : cart -> purchases
// 4. Empty cart
/*
const user = {
  name: 'kim',
  active: true,
  cart: [],
  purchases: [],
};

const item = {
  name: 'MacBook',
  price: 2800,
};

// 1. Add items to cart.
const addItemsToCart = (data, input) => ({
  ...data,
  cart: [input],
});

//2. Add 3% tax to item in cart
const addTaxInPrice = data => ({
  ...data,
  cart: data.cart.map(item => ({ ...item, price: item.price + item.price * 0.03 })),
});

// 3. Buy item: cart -> purchases
const replaceItemsToPurchase = data => ({
  ...data,
  purchases: [...data.cart],
});

// 4. Empty cart
const emptyCart = data => ({
  ...data,
  cart: [],
});

// Function Composition
const composFunc = function (...arg) {
  return (data, input) => arg.reduce((acc, fnc) => fnc(acc, input), data);
};

console.log(composFunc(addItemsToCart, addTaxInPrice, replaceItemsToPurchase, emptyCart)(user, item));

*/

//2️⃣
/*
* Create a function maxDonuts that returns the maximum number of
* whole donuts that can be cooked from a recipe.
*
* Input #
Two objects:
the first object is the recipe for the donut
the second object is the available quantity of ingredients.
Each ingredient’s value represents its quantity.

Output #
Maximum number of whole donuts cooked from the recipe and available ingredients

Sample input #
maxDonuts(
  { flour: 2, sugar: 40, butter: 20 },
  { flour: 5, sugar: 120, butter: 500 })

*/

const countOfDonuts = function (recipe, quantity) {
  return  Math.min(...Object.keys(recipe).map(ing => Math.floor(quantity[ing] / recipe[ing]) || 0));

};
const maxDonuts = countOfDonuts({ flour: 2, sugar: 40, butter: 20 }, { flour: 5, sugar: 120, butter: 500 });
console.log(maxDonuts);
