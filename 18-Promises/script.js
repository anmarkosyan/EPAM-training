'use strict';
//=============== 🔴 lecture part ===================
// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request);//Promise{}
console.log(window.fetch('hi'));
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      console.log(response); // Response{}
      return response.json();
    })
    .then(response => {
      console.log(response);
    });
};
getCountryData('armenia');
//================ 🔴 coding challenges =============
