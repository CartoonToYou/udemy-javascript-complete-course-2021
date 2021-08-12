'use strict';

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return `'${this.brand}' going at ${(this.speed += 10)} km/h`;
};

Car.prototype.brake = function () {
  return `'${this.brand}' going at ${(this.speed -= 5)} km/h`;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.brake());
console.log(bmw.accelerate());
