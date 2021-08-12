"use strict";

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const caclAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = caclAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 😀`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1992, "Chachchai"));
console.log(yearsUntilRetirement(1950, "Mike"));

const friend1 = "Miccle";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Miccle", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Chachchai";
const toon = [firstName, "Tongthavornsuwan", 2037 - 1992, "teacher", friends];
console.log(toon);
console.log(toon.length);

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Add elements
const friends = ["Miccle", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

const toon = {
  firstName: "Chachchai",
  lastName: "Tongthavornsuwan",
  age: 2037 - 1992,
  job: "Programmer",
  friends: ["Miccle", "Steven", "Peter"],
};

const toon = {
  firstName: "Chachchai",
  lastName: "Tongthavornsuwan",
  age: 2037 - 1992,
  job: "Programmer",
  friends: ["Michael", "Steven", "Peter"],
};
console.log(toon);

console.log(toon.lastName);
console.log(toon["lastName"]);

const nameKey = "Name";
console.log(toon[`first${nameKey}`]);
console.log(toon[`last${nameKey}`]);

const interestedIn = prompt(
  "What do you want to know about Toon? Choose between firstName, lastName, age, job, and friends"
);
console.log(toon[interestedIn]);

if (toon[interestedIn]) {
  console.log(toon[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

toon.location = "Bangkok";
toon["twitter"] = "@cartoonnetwork";
console.log(toon);

// Challenge
// "Chachchai has 3 friends, and his best friend is called Michael"
console.log(
  `${toon.firstName} has ${toon.friends.length} friends, and hist best friends is called ${toon.friends[0]}`
);

const toon = {
  firstName: "Chachchai",
  lastName: "Tongthavornsuwan",
  birthYear: 1992,
  job: "Programmer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,
  // calcAge: function(birthYear) {
  //   return 2037 - birthYear
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers's license`;
  },
};

console.log(toon.calcAge());

console.log(toon.age);

// Challenge
// "Chachchai is a 45 years old programmer, and he has a/no driver's license"
console.log(toon.getSummary());

// for (let rep = 0; rep < 30; rep++) {
//   console.log(`Lifting weights repetition ${rep + 1} 😎`);
// }

const toon = [
  "Chachchai",
  "Tongthavornsuwan",
  2037 - 1992,
  "Programmer",
  ["Michael", "Steven", "Peter"],
];

for (let idx = 0; idx < toon.length; idx++) {
  console.log(toon[idx]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGs ---");
for (let i = 0; i < toon.length; i++) {
  if (typeof toon[i] !== "string") continue;

  console.log(toon[i], typeof toon[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < toon.length; i++) {
  if (typeof toon[i] === "number") break;

  console.log(toon[i], typeof toon[i]);
}

const toon = [
  "Chachchai",
  "Tongthavornsuwan",
  2037 - 1992,
  "Programmer",
  ["Michael", "Steven", "Peter"],
  true,
];

for (let i = toon.length - 1; i >= 0; i--) {
  console.log(toon[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----- Starting ----- exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `);
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🎽`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repetition ${rep} 🎽`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
