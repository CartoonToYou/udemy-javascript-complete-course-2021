const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [],
  totals = [];

const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}

console.table(tips);
console.table(totals);

const calcAverage = (arr) => {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  return sum / arr.length;
};

console.log(calcAverage(totals));
