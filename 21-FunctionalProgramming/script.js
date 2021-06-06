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

// const countOfDonuts = function (recipe, quantity) {
//   return  Math.min(...Object.keys(recipe).map(ing => Math.floor(quantity[ing] / recipe[ing]) || 0));
//
// };
// const maxDonuts = countOfDonuts({ flour: 2, sugar: 40, butter: 20 }, { flour: 5, sugar: 120, butter: 500 });
// console.log(maxDonuts);

//3️⃣
/*
 * In this challenge, you have to implement the function boySum that takes the parameter records.
 * Here records is an array of objects that contains two properties, gender and value.
 * The gender can either be BOYS or GIRLS.
 * Your task is to return the sum of all the values that have BOYS as the gender.
 * */
/*
const records = [
  {
    value: 24,
    gender: 'BOYS',
  },
  {
    value: 42,
    gender: 'BOYS',
  },
  {
    value: 85,
    gender: 'GIRLS',
  },
  {
    value: 12,
    gender: 'GIRLS',
  },
  {
    value: 10,
    gender: 'BOYS',
  },
];

const calcBoySum = function (boysArr) {
  return boysArr.reduce(function (acc, item) {
    if (item.gender === 'BOYS') {
      acc += item.value;
    }
    return acc;
  }, 0);
};
const boySum = calcBoySum(records);
console.log(boySum);
 */

//4️⃣ Currying function
/*
 * Write a wrapper function currying which accepts a function, say func,
 * and returns the curried version of func.
 * */
/*
const multiply = function (a, b, c) {
  return a * b * c;
};

const curring = function (fnc) {
  const curriedFunc = function (...arg) {
    if (arg.length >= fnc.length) {
      return fnc(...arg);
    } else {
      return function (...nextArg) {
        return curriedFunc(...arg, ...nextArg);
      };
    }
  };
  return curriedFunc;
};

const curried = curring(multiply);
console.log(curried(2, 3, 4));
console.log(curried(2, 3, 4, 5, 6));
console.log(curried(1)(2)(3));
console.log(curried(2)(3)(4));
console.log(curried(2, 3)(4));
console.log(curried(5)(6, 7));
 */

//5️⃣ partial functions
/*
function addition(x, y, z) {
  return x + y + z;
}
// const plus5 = addition.bind(null, 5);
// console.log(plus5(10, 3));
console.log(addition.bind(null, 5)(10, 3));//18
 */

//6️⃣ partial functions
// const sentence = (conjunction, ...otherWords) => {
//   const commasJoiningWords = otherWords.slice(0,-1).join(", ");
//   const lastWord = otherWords.pop();
//   return `${commasJoiningWords} ${conjunction} ${lastWord}`;
// }
//
// const result = sentence.bind(null, 'and');
// console.log(result("apple", "mango", "peach"))

//7️⃣ higher-order function
/*
* A security guard at the club needs to ensure that only customers over or equal to the age of 18 enter the club.
Here customers is an array of objects such that each customer object has an age and name property.
The guard needs the names of the customers who can enter the club. He can make use of two functions:
*filter
*map

Both of these are given to you in the testing widget.
Your task is to write a funcCompose function,
which will be a higher-order function that takes multiple functions and composes them.
In this case, it should compose the two functions mentioned above.
*/
/*
const customers = [
  { name: 'Hermon', age: 15 },
  { name: 'Ron', age: 18 },
  { name: 'Harry', age: 24 },
];
//*filter
const func1 = userData => userData.filter(user => user.age >= 18);

//*map
const func2 = userData => userData.map(item => item.name);

//console.log(func2(func1(customers)));//["Ron", "Harry"]

const funcCompose = function (...arg) {
  return function (userData) {
    return arg.reduce((acc, fn) => fn(acc), userData);
  };
};

console.log(funcCompose(func1, func2)(customers)); //["Ron", "Harry"]
 */

//8️⃣
// function work(x, y) {
//   return x + y;
// }
//
// function spy(fnc) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return fnc.apply(this, args);
//   }
//
//   wrapper.calls = [];
//   console.log(wrapper);
//   return wrapper;
// }
//
// work = spy(work);
//console.log(work(2, 3)); //5

//9️⃣
//pure function
function f(x) {
  console.log(x);
}
//wrapper function
function delay(fnc, timeMs) {
  return function(test) {
    // setTimeout(() => {
    //   fnc.call(this, test);
    // }, timeMs);

    //2nd way
    //setTimeout(fnc, timeMs, test)
  };
}

// create wrappers
const f1000 = delay(f, 1000);
const f1500 = delay(f, 1500);

f1000('test'); // shows "test" after 1000ms
f1500('test'); // shows "test" after 1500ms
