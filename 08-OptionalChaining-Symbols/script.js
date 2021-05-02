'use strict';

//==================== 🔴optional chaining: ES2020 =================
//syntax
// obj.val?.prop
// obj.val?.[expr]
// obj.arr?.[index]
// obj.func?.(args)

// const user = {};
// console.log(user.address); //undefined
// //console.log(user.address.street);//❗️TypeError: Cannot read property 'street' of undefined
// console.log(user?.address?.street); // undefined
//
// //if not exist: is null or undefined, immediately return UNDEFINED (NOT TypeERROR)
// const user1 = {
//   address: {
//     shop: undefined,
//     street: null,
//   },
//
// };
// console.log(user1.address?.shop?.open); //undefined
//
// //if exist: 0, '' => value
// const user2 = {
//   address: {
//     street: 0,
//     shop: '',
//   },
//
// };
//
// console.log(user2.address?.street); //0
// console.log(user2.address?.shop);//''
//
// //exp:
// let potentiallyNullObj = null;
// let x = 0;
// let prop = potentiallyNullObj?.[x++];
// console.log(x);//0

//arrays
// const users = [{ name: 'Ralf', age: 33 }];
// console.log(users[0]?.name ?? 'no user');

//===================== 🔴 Symbol data type ===============
// const id = Symbol('hi there');
// const id1 = Symbol('hi there');
//
// console.log(id); //Symbol(id)
// console.log(id === id1); //false

//Symbols don’t auto-convert to a string
//alert(id);//TypeError: Cannot convert a Symbol value to a string
//alert(id.toString());//Symbol(hi there)
//alert(id.description);//hi there

//1️⃣ in an object literal
// const id2 = Symbol(12 + 2);
//
// const user = {
//   name: 'Anush',
//   [id2]: 123,
// };
// console.log(id2.description); //14
// console.log(typeof id2.description); //string
// console.log(user); //{ name: 'Anush', [Symbol(id)]: 123 }
// console.log(user[id2]); //123
// console.log(typeof user[id2]); //number
//
// //❗️Symbolic properties do not participate in for..in loop.Object.keys() and Object.values()
// for (const key in user) {
//   console.log(user[key]); //Anush
// }
// console.log(Object.keys(user)); //[ 'name' ]
// console.log(Object.values(user)); //[ 'Anush' ]
//
// //✅ but with Object.assign will copy and also for {...user}
// const copy = Object.assign({}, user);
// console.log(copy); //{ name: 'Anush', [Symbol(14)]: 123 }
// console.log(copy[id2]); //123
//
// const copy2 = { ...user };
// console.log(copy2); //{ name: 'Anush', [Symbol(14)]: 123 }

// console.log(typeof uni1.description);
// Symbol.iterator()
// Symbol.isConcatSpreadable();

//====================== 🔴 objects converted into primitives ==================

// const product = {
//   title: 'hello',
//   price: 15,
//   [Symbol.toPrimitive]: function(hin){
//     return 'hello'
//   },
//   // toString() {
//   //   return this.title;
//   // },
//   // valueOf() {
//   //   return this.price;
//   // },
// };
// console.log(product);//
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
const promotion = Symbol('applyPromotion');

function Product(title, qty, price) {
  this.title = title;
  this.qty = qty;
  this.price = price;

  const category = {
    id: 123,
    title: 'fruit',
  };

  this[promotion] = function (decreaseByPrice) {
    price -= decreaseByPrice;
    this.price = price;
  };

  this[Symbol.toPrimitive] = function (hint) {
    const { title } = { ...category };
    return hint === 'string' ? `This is an ${title}, from <${title}> category with ${price} price!` : hint === 'number' ? price : qty * price;
  };
}

const product1 = new Product('apple', 15, 20);
const product2 = new Product('banana', 20, 12);

//alert(product1);
console.log(product1[promotion](3));
console.log(product1);

console.log(`${product1} \n${product2}`);
console.log(product1 * product2);
console.log(product1 + product2);
