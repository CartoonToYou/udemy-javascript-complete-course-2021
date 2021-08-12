// const temps = [17, 21, 23];
const temps = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let forecastMessage = "";
  for (let i = 1; i <= arr.length; i++) {
    forecastMessage += `... ${arr[i - 1]}°C in ${i} days `;
  }
  return `${forecastMessage} ...`;
};

console.log(printForecast(temps));
