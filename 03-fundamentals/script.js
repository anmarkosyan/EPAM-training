'use strict';

//loop for(), break, continue, nested loop,

//for (let i = 0; i < 2; i++) {
// console.log(i);
//if(i === 5) break;
//if (i % 2) console.log(i); //1, 3, 5, 7, 9
//else if(!(i % 2)) console.log(i);//
//}
//do ... while
// let x = 1;
// if (x <= 5) {
//   //do something
//   console.log(x++);
// }
//
// while (x <= 5) {
//   console.log(x++); //infinity
// }
// console.log(x)//6
//
// //
//
// do{
//     console.log(x++)
// }while (x <= 5)

//switch ... case

//for loop

//📍while loop
// let x = 0;
// while (x < 10) {
//   let y = x + 1;
//   x++;
// }
// console.log(x);// 10

// let x = 10;
// while (x > 5){
//   let y = x * x;
//   x+=2;
// }
// console.log(x)

let i = 3;
while (i <= 10) {
  let z = i++;
  i += 2;
}
console.log(i);
