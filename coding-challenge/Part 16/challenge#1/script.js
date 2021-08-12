'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const coords1 = [52.508, 13.381];
const coords2 = [19.037, 72.873];
const coords3 = [-33.933, 18.474];

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const whereAmI = function (coords) {
  const [lat, lng] = coords;
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Something is wrong! ${response.status}`);
      return response.json();
    })
    .then(({ city, country }) => {
      console.log(`You are in ${city}, ${country}`);
      // renderCountry(data);
      return fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`No country found! ${response.status}`);
      return response.json();
    })
    .then(([data]) => {
      console.log(data);
      renderCountry(data);
    })
    .catch(err => {
      console.error(err.message);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  whereAmI(coords1);
});
