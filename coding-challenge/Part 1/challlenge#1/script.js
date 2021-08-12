// Data 1
let massMark = 78;
let massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

// Data 2
// let massMark = 95;
// let massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

let markHigherBMI = BMIMark > BMIJohn;

console.log("BMI-Mark: ", BMIMark);
console.log("BMI-John: ", BMIJohn);
console.log("Mark has a higher BMI than John: ", markHigherBMI);
