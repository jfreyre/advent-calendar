// import { numbersMock as numbers, boardsMock as boards } from '../data/day4.js';
import { numbers, boards } from '../data/day4.js';

let importedData = boards.map((x) => x);
const FOUND_VALUE = -1;
const BINGO_SIZE = 5;
const CLEAR_VALUE = -9999;

function calculateWinnerBoardTotal(winningRow, bingoCards) {
  var startingBoardIndex = parseInt(winningRow / BINGO_SIZE) * BINGO_SIZE;

  console.log(
    'row',
    winningRow,
    'then start card index is',
    startingBoardIndex
  );
  console.log(bingoCards[winningRow]);

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  let sum = 0;
  for (var i = 0; i < BINGO_SIZE; i++) {
    sum = bingoCards[startingBoardIndex + i]
      .filter((e) => e > FOUND_VALUE)
      .reduce(reducer, sum);
  }
  return sum;
}

function updateBingoCards(value, bingoCards) {
  for (let i = 0; i < bingoCards.length; i++) {
    for (let j = 0; j < bingoCards[i].length; j++) {
      if (bingoCards[i][j] === value) {
        bingoCards[i][j] = FOUND_VALUE;
      }
    }
  }
}

function removeCardFromTheGame(startRow, bingoCards) {
  for (var i = 0; i < BINGO_SIZE; i++) {
    bingoCards[startRow + i].fill(CLEAR_VALUE);
  }
}

function checkWinners(bingoCards) {
  let i = 0;

  let winners = [];

  // Check horizontal
  while (i < bingoCards.length) {
    if (bingoCards[i].every((e) => e === FOUND_VALUE)) {
      console.log('it s a winning row', i);
      winners.push(i);
    }
    i++;
  }

  i = 0;
  // Check vertical win
  while (i < bingoCards.length) {
    for (var x = 0; x < BINGO_SIZE; x++) {
      let isAWinningColumn =
        bingoCards[i][x] === FOUND_VALUE &&
        bingoCards[i + 1][x] === FOUND_VALUE &&
        bingoCards[i + 2][x] === FOUND_VALUE &&
        bingoCards[i + 3][x] === FOUND_VALUE &&
        bingoCards[i + 4][x] === FOUND_VALUE;

      if (isAWinningColumn) {
        console.log('it s a winning column', i);
        winners.push(i);
      }
    }

    i += BINGO_SIZE;
  }

  return winners;
}

function resolve() {
  let index = 0;
  let hasWinner = false;

  let boardsToWin = parseInt(importedData.length / BINGO_SIZE);
  console.log('we have ', boardsToWin, 'boards in da game');
  do {
    let currentNumber = numbers[index];
    console.log(`New number is ${currentNumber}`);

    updateBingoCards(currentNumber, importedData);

    hasWinner = checkWinners(importedData);

    if (hasWinner.length > 0) {
      for (let winnerIndex = 0; winnerIndex < hasWinner.length; winnerIndex++) {
        let boardId = parseInt(hasWinner[winnerIndex] / BINGO_SIZE);
        if (boardsToWin == 1) {
          var result = calculateWinnerBoardTotal(
            hasWinner[winnerIndex],
            importedData
          );

          console.log('last board is ', boardId, hasWinner[winnerIndex]);

          console.log('result is ', currentNumber * result);
          boardsToWin = 0;
        } else {
          removeCardFromTheGame(boardId * BINGO_SIZE, importedData);

          boardsToWin--;

          console.log('we have a new winner on the board. Still', boardsToWin);
          console.log(boardId, 'has been cleaned');
        }
      }
    }

    index++;
  } while (boardsToWin >= 1);
}

resolve();
