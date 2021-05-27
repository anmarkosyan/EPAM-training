'use strict';
//=============== 🔴 lecture part ===================
const btn = document.querySelector('.btn-country');

const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data[0]);
      const neighbour = data[0].borders[1];

      return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => console.log(data[0]))
    .catch(err => {
      console.error(`Something went wrong 💥💥💥 ${err.message}.Try again!`);
    });
};

btn.addEventListener('click', function () {
  getCountryData('armenia');
});
//================ 🔴 coding challenges =============
