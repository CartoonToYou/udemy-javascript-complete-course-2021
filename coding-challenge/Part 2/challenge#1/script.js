const calcAverage = (firstScore, secondScore, thirdScore) => {
  return (firstScore + secondScore + thirdScore) / calcAverage.length;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2)
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas >= avgDolphins * 2)
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  else console.log("No winner!!!");
}

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
