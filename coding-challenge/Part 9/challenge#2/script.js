'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
const scoredPlayers = game.scored.entries();
for (const [idx, player] of scoredPlayers) {
  console.log(`Goal ${idx + 1}: ${player}`);
}

// 2)
const odds = Object.entries(game.odds);
let oddAvg = 0;
for (const [, odd] of odds) {
  oddAvg += odd;
}
console.log(oddAvg / odds.length);

// 3)
for (const [team, odd] of odds) {
  console.log(
    `Odd of ${game[team] ? `victory ${game[team]}` : 'draw'}: ${odd}`
  );
}

// 4)
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
