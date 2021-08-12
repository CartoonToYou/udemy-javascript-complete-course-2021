const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(
  `${mark.firstName}'s BMI (${mark.calcBMI().toFixed(2)}) is ${
    mark.calcBMI() > john.calcBMI() ? "higher" : "lower"
  } than ${john.firstName}'s (${john.calcBMI().toFixed(2)})`
);
