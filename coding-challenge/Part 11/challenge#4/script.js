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

/*
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
*/

//////////////////////////////////////
// Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1)
dogs.forEach(dog => {
  dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(2));
});
console.log(dogs);

// 2)
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
if (dogSarah.curFood < dogSarah.recommendedFood * 0.9)
  console.log('Sarah dog eating too little recommended portion');
else if (dogSarah.curFood > dogSarah.recommendedFood * 1.1)
  console.log(`Sarah dog eating too larger recommended portion`);
else console.log(`Sarah dog eating an Okay amount`);

// 3)
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

// 4)
const ownersTooLittleString = ownersEatTooLittle.join(' and ');
console.log(`${ownersTooLittleString}'s dogs eat too much!`);
const ownersTooMuchString = ownersEatTooMuch.join(' and ');
console.log(`${ownersTooMuchString}'s dogs eat too little!`);

// 5)
const anyDogsExactly = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(anyDogsExactly);

// 6)
const anyDogsOkay = dogs.some(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(anyDogsOkay);

// 7)
const allOkayDogs = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(allOkayDogs);

// 8)
const sortDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortDogs);
