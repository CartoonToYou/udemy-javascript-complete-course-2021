'use strict';

/*
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
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
