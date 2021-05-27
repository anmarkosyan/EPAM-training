'use strict';
//====================== Timer ====================

//console.log(window.setTimeout);//global object method

// const timer = setTimeout(function () {
//   console.log('hi');
// }, 10000);
//
// setTimeout(function () {
//   clearTimeout(timer);
//   console.log('stop timer!!');
// }, 5000);

//======

for (var i = 0; i < 10; i++) {
  setTimeout(num => {
    console.log(num);
  }, 0, i);
}
console.time('loop time');
for (let i = 0; i < 10; i++) {}
console.timeEnd('loop time');