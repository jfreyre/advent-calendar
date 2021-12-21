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
  function increaseScore(playerIndex) {
    scores[playerIndex] +=
      playersPosition[playerIndex] === 10
        ? 10
        : playersPosition[playerIndex] % 10;
  }

  function playFor(playerIndex) {
    const currentScore = rollDice();
    playersPosition[playerIndex] += currentScore;

    increaseScore(playerIndex);

    console.log(
      playerIndex + 1,
      dice,
      currentScore,
      playersPosition[playerIndex],
      scores[playerIndex]
    );
  }

  let currentScore = 0;
  do {
    playFor(0);
    playFor(1);
    // currentScore = rollDice();
    // playersPosition[0] += currentScore;

    // increaseScore(0);

    // console.log(1, dice, currentScore, playersPosition[0], scores[0]);

    // currentScore = rollDice();
    // playersPosition[1] += currentScore;

    // increaseScore(1);

    // console.log(2, dice, currentScore, playersPosition[1], scores[1]);
  } while (!scores.some((s) => s >= 1000));
}

solve();
