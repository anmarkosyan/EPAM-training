// const users = ['anush', 'markosyan'].map((num, i, thisArg)=>{});
//
// Array.prototype.newMap = function (callback) {
//   const userArr = this;
//   const newArr = [];
//   for (let i = 0; i < userArr.length; i++) {
//     newArr.push(callback(userArr[i], i, this));
//   }
//
//   return newArr;
// };
//
// const callback = function (el) {
//   return `${el.toUpperCase()}`;
// };
//
//  console.log(users.newMap(callback));

//====== reduce
const numbers = [1, 2, 3];

Array.prototype.newReduce = function (callFnc, acc) {
  const arr = this;
  const firstItem = arr[0];
  let totalRes = acc;
  let i;


  if (totalRes === undefined) {
    totalRes = firstItem;
    i = 1;
  }else{
    i = 0;
  }

  for (; i < arr.length; i++) {
    totalRes = callFnc(totalRes, arr[i], i, this);
  }
  return totalRes;
};

const callbackFnc = function (acc, num) {
  return acc + num;
};
console.log(numbers.newReduce(callbackFnc, 10));
