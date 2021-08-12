'use strict';

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
