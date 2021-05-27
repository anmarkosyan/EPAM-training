'use strict';
//=============== 🔴 lecture part ===================
const btn = document.querySelector('.btn-country');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})!!!`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
   getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data[0]);
      const neighbour = data[0].borders[1];

      if(!neighbour) throw new Error('No neighbour found 🤷🏻‍')
      return getJSON(`https://restcountries.eu/rest/v2/name/${neighbour}`, 'Country not found');
    })
    .then(data => console.log(data[0]))
    .catch(err => {
      console.error(`Something went wrong 💥💥💥 ${err.message} .Try again!`);
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
//getCountryData('hjkghj');
//================ 🔴 coding challenges =============
