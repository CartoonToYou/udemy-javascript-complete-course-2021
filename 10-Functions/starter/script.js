'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
const flight = 'LH234';
const chachchai = {
  name: 'Chachchai Tongthavornsuwan',
  passport: 245786521357,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 245786521357) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, chachchai);
// console.log(flight);
// console.log(chachchai);

// Is the same as doing...
// const flightNum = flight;
// const passenger = chachchai;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(chachchai);
checkIn(flight, chachchai);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transform string: ${fn(str)}`);

  console.log(`Transform by: ${fn.name}`);
};

transformer('Javascript in the best', upperFirstWord);

transformer('Javascript in the best', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Toon', 'Martha', 'Adam'].forEach(high5);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Toon');
greeterHey('Steven');

greet('Hello')('Toon');

// Challenge
const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greetArr('Hey')('Test');
*/

/*
//////////////////////////////
// Call, Apply, and Bind methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} book a seat in ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${name} book a seat in ${this.airline} flight ${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Chachchai Tongthavornsuwan');
lufthansa.book(653, 'Sattha Tongthavornsuwan');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams')

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Chachchai Tongthavornsuwan');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(2000));

const calcVatExp = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
console.log(calcVatExp(0.2)(100));
const calcVatArr = rate => value => value + value * rate;
console.log(calcVatArr(0.2)(100));
*/

/*
const runOnce = function () {
  console.log('this will never run again');
};

runOnce();

// IIFE (Immediately Invoked Function Expressions)
(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => {
  console.log('this will AL50 never run again!');
})();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(100, 3);
*/
