const BOARD_GAME_SIZE = 10;

let players = [
  { position: 4, score: 0 },
  { position: 8, score: 0 },
];

let dice = 0;

let rollDice = () => {
  let sum = ++dice + ++dice + ++dice;
  if (dice === 99) {
    dice = 0;
  }
  return sum;
};

function playFor(playerIndex) {
  const currentScore = rollDice();
  players[playerIndex].position += currentScore;

  players[playerIndex].score +=
    players[playerIndex].position === BOARD_GAME_SIZE
      ? BOARD_GAME_SIZE
      : players[playerIndex].position % BOARD_GAME_SIZE;

  console.log(
    playerIndex + 1,
    dice,
    currentScore,
    players[playerIndex].position,
    players[playerIndex].score
  );
}

do {
  for (let i = 0; i < players.length; i++) {
    playFor(i);
  }
} while (!scores.some((s) => s >= 100));
