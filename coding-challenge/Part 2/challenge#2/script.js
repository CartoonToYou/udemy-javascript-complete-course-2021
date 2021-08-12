const calcTips = (billValues) => {
  return billValues >= 50 && billValues <= 300
    ? billValues * 0.15
    : billValues * 0.2;
};
console.log(calcTips(100));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
