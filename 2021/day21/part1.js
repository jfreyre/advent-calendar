const BOARD_GAME_SIZE = 10;

let nbTimesDiceRolled = 0;
let dice = 0;
// let players = [
//   { position: 4, score: 0 },
//   { position: 8, score: 0 },
// ];
let players = [
  { position: 7, score: 0 },
  { position: 2, score: 0 },
];

let incDice = () => {
  dice++;
  nbTimesDiceRolled++;
  dice = dice === 101 ? 1 : dice;
  return dice;
};

function rollDice() {
  let sum = incDice() + incDice() + incDice();

  return sum;
}

function playFor(playerIndex) {
  let player = players[playerIndex];
  const BOARD_GAME_SIZE = 10;
  const WINNING_SCORE = 1_000;

  let nbTimesDiceRolled = 0;
  let dice = 0;
  // let players = [
  //   { position: 4, score: 0 },
  //   { position: 8, score: 0 },
  // ];
  let players = [
    { position: 7, score: 0 },
    { position: 2, score: 0 },
  ];

  let incDice = () => {
    dice++;
    nbTimesDiceRolled++;
    dice = dice === 101 ? 1 : dice;
    return dice;
  };

  function rollDice() {
    let sum = incDice() + incDice() + incDice();

    return sum;
  }

  function playFor(playerIndex) {
    let player = players[playerIndex];
    const currentScore = rollDice();
    player.position += currentScore;

    const mod = player.position % BOARD_GAME_SIZE;
    player.score += mod === 0 ? 10 : mod;
    // players[playerIndex].position === BOARD_GAME_SIZE
    //   ? BOARD_GAME_SIZE
    //   : players[playerIndex].position % BOARD_GAME_SIZE;

    console.log(playerIndex + 1, dice, currentScore, players[playerIndex]);

    if (player.score >= WINNING_SCORE) {
      console.log(nbTimesDiceRolled);
    }
  }

  do {
    for (let i = 0; i < players.length; i++) {
      playFor(i);
    }
  } while (!players.some((s) => s.score >= WINNING_SCORE));
  console.log(nbTimesDiceRolled);

  const currentScore = rollDice();
  player.position += currentScore;

  const mod = player.position % BOARD_GAME_SIZE;
  player.score += mod === 0 ? 10 : mod;
  // players[playerIndex].position === BOARD_GAME_SIZE
  //   ? BOARD_GAME_SIZE
  //   : players[playerIndex].position % BOARD_GAME_SIZE;

  console.log(playerIndex + 1, dice, currentScore, players[playerIndex]);

  if (player.score >= 1000) {
    console.log(nbTimesDiceRolled);
  }
}

do {
  for (let i = 0; i < players.length; i++) {
    playFor(i);
  }
} while (!players.some((s) => s.score >= 1000));
console.log(nbTimesDiceRolled);
