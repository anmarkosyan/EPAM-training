'use strict';

//==================== 🔴optional chaining =================
//syntax
// obj.val?.prop
// obj.val?.[expr]
// obj.arr?.[index]
// obj.func?.(args)

const user = {};
console.log(user.address); //undefined
//console.log(user.address.street);//❗️TypeError: Cannot read property 'street' of undefined
console.log(user?.address?.street); // undefined

//if not exist: is null or undefined, immediately return UNDEFINED (NOT TypeERROR)
const user1 = {
  address: {
    shop: undefined,
    street: null,
  },

};
console.log(user1.address?.shop?.open); //undefined

//if exist: 0, '' => value
const user2 = {
  address: {
    street: 0,
    shop: '',
  },

};

console.log(user2.address?.street); //0
console.log(user2.address?.shop);//''

//exp:
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];
console.log(x);//0

//===================== 🔴 symbol data type ===============
// const id = Symbol('');
// console.log(Symbol('name') === Symbol('name'));//false
//
// const unique = Symbol('id');
// const user = {
//   name: 'Anush',
// [unique]: 122,
// }
//
// console.log(user[unique]);
// console.log(unique);
//
// const uni1 = Symbol.for('if');
// const uni2 = Symbol.for('if');
//
// console.log(typeof uni1.description);
// Symbol.iterator()
// Symbol.isConcatSpreadable();

//objects converted into primitives

// const product = {
//   title: 'hello',
//   price: 15,
//   // [Symbol.toPrimitive]: function(){
//   //   return 'hello'
//   // },
//   toString() {
//     return this.title;
//   },
//   valueOf() {
//     return this.price;
//   },
// };
// //console.log(product);//
// //alert(product);
// console.log(product * 5); //
// console.log(product + product);

//================== 👩🏻‍💻 coding challenge ================
/*
Create 2 product objects, which will consist of
1. title
2. qty
3. price
4.category nested object
   a.id
   b.title
5. Symbol('applyPromotion') method, which takes a  decreaseByPrice argument and decreases product's price by that amount
6. Symbol.toPrimitive method

Using Symbol.toPrimitive we should get following results (revise this method hint argument usage)
1.when conversion type is string, we should get title + category + $price , e.g. alert(product1)
2.when conversion type is number, e.g. product1 * product2, it should return price
3.in case of default conversion, e.g product1 + product2, it should return qty * price
 */
