'use strict';

/*
//////////////////////////////////////
// Challenge #1
const juliaData1 = [3, 5, 2, 12, 7];
const KateData1 = [4, 1, 15, 8, 3];

const juliaData2 = [9, 16, 6, 8, 3];
const KateData2 = [10, 5, 6, 1, 4];

const checkDogs = function (firstArr, secondArr) {
  const julia = [...firstArr.slice(1, -2)];
  const kate = [...secondArr];
  const mergeArr = [...julia, ...kate];
  mergeArr.forEach((dogAge, i) => {
    dogAge < 3
      ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
      : console.log(
          `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
        );
  });
};

checkDogs(juliaData1, KateData1);
checkDogs(juliaData2, KateData2);
*/

/*
//////////////////////////////////////
// Challenge #2
const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const humanAdultAges = humanAges.filter(age => age >= 18);
  // const averageAge =
  //   humanAdultAges.reduce((acc, age) => (acc += age), 0) /
  //   humanAdultAges.length;

  // avg => [2,3] = (2+3)/2 = 2.5 === 2/2+2/3 = 2.5
  const averageAge = humanAdultAges.reduce(
    (acc, age, _, arr) => (acc += age / arr.length),
    0
  );

  return averageAge;
};

console.log(calcAverageHumanAge(dogAges1));
console.log(calcAverageHumanAge(dogAges2));
*/

//////////////////////////////////////
// Challenge #3
const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogAges) {
  const averageAge = dogAges
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, adultAge, _, arr) => acc + adultAge / arr.length, 0);
  // avg => [2,3] = (2+3)/2 = 2.5 === 2/2+2/3 = 2.5

  return averageAge;
};

console.log(calcAverageHumanAge(dogAges1));
console.log(calcAverageHumanAge(dogAges2));
