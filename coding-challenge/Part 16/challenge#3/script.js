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

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found.'));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => {
//     console.error(err);
//   });

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec * 1000);
  });
};

const loadNPause = async function () {
  try {
    currentImg = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    currentImg.style.display = 'none';
    await wait(2);
    currentImg = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    currentImg.style.display = 'none';
    await wait(2);
    currentImg = await createImage('img/img-3.jpg');
    console.log('Image 3 loaded');
    await wait(2);
    currentImg.style.display = 'none';
  } catch (err) {
    console.error(`💥 ${err.message}`);
  }
};

// loadNPause();

const loadAll = async function (imgArr = []) {
  try {
    // Promise.all(createImage(imgArr));
    const imgs = imgArr.map(async img => await createImage(img));

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(imgEl => imgEl.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  } finally {
    console.log('End of fetching!');
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
