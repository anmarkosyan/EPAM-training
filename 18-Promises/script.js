'use strict';
//=============== 🔴 lecture part ===================
// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request);//Promise{}

const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data[0]);
      const neighbour = data[0].borders[1];

      return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => console.log(data[0]));
};
getCountryData('armenia');
//================ 🔴 coding challenges =============
