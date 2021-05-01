'use strict';


//optional chaining

//symbol data type
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

const product = {
  title: 'hello',
  price: 15,
  // [Symbol.toPrimitive]: function(){
  //   return 'hello'
  // },
  toString(){
    return this.title;

  },
  valueOf(){
    return this.price;
  }

}
//console.log(product);//
//alert(product);
console.log(product * 5);//
console.log(product + product);
