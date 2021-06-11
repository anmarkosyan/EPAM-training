'use strict';
//================= 🔴 lecture part ===================
//1️⃣ try...cache block
//📍 try...catch only works for runtime errors
//📍 try...catch works synchronously
try {
  console.log('hi first');
  k;
  console.log('hi second');
} catch (err) {
  console.error("it's an error");
}
//~~~~
// try {
//   setTimeout(function() {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (err) {
//   alert( "won't work" );
// }
//instead of doing this
setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    console.log( "error is caught here!" );
  }
}, 1000);



