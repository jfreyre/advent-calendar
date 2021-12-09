// import { numbersMock as numbers, boardsMock as boards } from '../data/day4.js';
import { numbers, boards } from '../data/day4.js';

let importedData = boards.map((x) => x);
const foundValue = -1;
const bingoSize = 5;

function calculateWinnerBoardTotal(winningRow, bingoCards) {
  var startingBoardIndex = parseInt(winningRow / bingoSize) * bingoSize;

  console.log(
    'row',
    winningRow,
    'then start card index is',
    startingBoardIndex
  );
  console.log(bingoCards[winningRow]);

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  let sum = 0;
  for (var i = 0; i < bingoSize; i++) {
    sum = bingoCards[startingBoardIndex + i]
      .filter((e) => e > foundValue)
      .reduce(reducer, sum);
  }
  return sum;
}

function updateBingoCards(value, bingoCards) {
  for (let i = 0; i < bingoCards.length; i++) {
    for (let j = 0; j < bingoCards[i].length; j++) {
      if (bingoCards[i][j] === value) {
        bingoCards[i][j] = foundValue;
      }
    }
  }
}

function removeCardFromTheGame(startRow, bingoCards) {
  for (var i = 0; i < bingoSize; i++) {
    bingoCards[startRow + i].fill(-99999);
  }
}

function checkWinners(bingoCards) {
  let i = 0;

  let winners = [];

  // Check horizontal
  while (i < bingoCards.length) {
    if (bingoCards[i].every((e) => e === foundValue)) {
      console.log('it s a winning row', i);
      winners.push(i);
    }
    i++;
  }

  i = 0;
  // Check vertical win
  while (i < bingoCards.length) {
    for (var x = 0; x < bingoSize; x++) {
      let isAWinningColumn =
        bingoCards[i][x] === foundValue &&
        bingoCards[i + 1][x] === foundValue &&
        bingoCards[i + 2][x] === foundValue &&
        bingoCards[i + 3][x] === foundValue &&
        bingoCards[i + 4][x] === foundValue;

      if (isAWinningColumn) {
        console.log('it s a winning column', i);
        winners.push(i);
      }
    }

    i += bingoSize;
  }

  return winners;
}

function resolve() {
  let index = 0;
  let hasWinner = false;

  let boardsToWin = parseInt(importedData.length / bingoSize);
  console.log('we have ', boardsToWin, 'boards in da game');
  do {
    let currentNumber = numbers[index];
    console.log(`New number is ${currentNumber}`);

    updateBingoCards(currentNumber, importedData);

    hasWinner = checkWinners(importedData);

    if (hasWinner.length > 0) {
      for (let winnerIndex = 0; winnerIndex < hasWinner.length; winnerIndex++) {
        let boardId = parseInt(hasWinner[winnerIndex] / bingoSize);
        if (boardsToWin == 1) {
          var result = calculateWinnerBoardTotal(
            hasWinner[winnerIndex],
            importedData
          );

          console.log('last board is ', boardId, hasWinner[winnerIndex]);
          console.log('current number: ', currentNumber);
          console.log('sum of board', result);
          boardsToWin = 0;
        } else {
          removeCardFromTheGame(boardId * bingoSize, importedData);

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
