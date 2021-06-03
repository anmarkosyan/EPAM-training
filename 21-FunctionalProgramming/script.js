'use strict';
//================= 🔴 Lecture part ==================
// const pipe = function(...fns) {
//   return function  (x){
//     fns.reduce((v, f) => f(v), x);
//   }
//
// }
const pipe = function (...fns) {
  return function (x) {
    return fns.reduce((v, f) => f(v), x);
  };
};

const fn1 = s => s.toLowerCase();
const fn2 = s => s.split('').reverse().join('');
const fn3 = s => s + '!';

const newFunc = pipe(fn1, fn2, fn3);
const result = newFunc('Time'); // emit!
console.log(result);

const x = {
  val: 2,
};

const x1 = x => Object.assign({}, x, { val: x.val + 1 });

const x2 = x => Object.assign({}, x, { val: x.val * 2 });

//console.log(x1(x2(x)).val); // 5
//================= 🔴 coding challenges ===============
// implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item : cart -> purchases
// 4. Empty cart

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
const addItemsToCart = function (data, input) {
  return {
    ...data,
    cart: [input],
  };
};

//2. Add 3% tax to item in cart
const addTaxInPrice = function (data, input) {
  return {
    ...data,
    cart: data.cart.map(item => ({ ...item, price: item.price + item.price * 0.03 })),
  };
};
// 3. Buy item: cart -> purchases
const replaceItemsToPurchase = function (data, input) {
  return {
    ...data,
    purchases: [...data.cart],
  };
};

// 4. Empty cart
const emptyCart = function (data, input) {
  return {
    ...data,
    cart: (data.cart = []),
  };
};

function compose(f, g) {
  return function (...args) {
    return f(g(...args));
  };
}

//result function
const result1 = function (...arg) {
  return arg.reduce(compose);
};

const c = result1(emptyCart, replaceItemsToPurchase, addTaxInPrice, addItemsToCart);
console.log(c(user, item));
