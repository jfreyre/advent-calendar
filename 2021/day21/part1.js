const BOARD_GAME_SIZE = 10;

function solve() {
  let playersPosition = [4, 8];
  let scores = [0, 0];
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
    playersPosition[playerIndex] += currentScore;

    scores[playerIndex] +=
      playersPosition[playerIndex] === BOARD_GAME_SIZE
        ? BOARD_GAME_SIZE
        : playersPosition[playerIndex] % BOARD_GAME_SIZE;

    console.log(
      playerIndex + 1,
      dice,
      currentScore,
      playersPosition[playerIndex],
      scores[playerIndex]
    );
  }

  do {
    playFor(0);
    playFor(1);
  } while (!scores.some((s) => s >= 100));
}

solve();
