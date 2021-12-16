import { mock as data } from './data.js';

const travel = (array, from, to) => {
  const go = (i, j, smallest) => {
    // Current score is already to high
    if (smallest >= currentSmallestEffort) {
      return;
    }

    // We've reached the destination!
    if (i == to[0] && j == to[1]) {
      currentSmallestEffort = smallest;

      // console.log('reached!', smallest);
      return;
    }

    if (unvisited[i]?.[j] > smallest) {
      unvisited[i][j] = smallest;
      let value = smallest + +array[i][j];

      go(i, j + 1, value);
      go(i - 1, j, value);
      go(i + 1, j, value);
      go(i, j - 1, value);
    }
  };

  let currentSmallestEffort = Number.MAX_VALUE;
  // We build a matrix with hight cost
  let unvisited = array.map((a) => a.split('').map((_) => Number.MAX_VALUE));

  // debugger;
  console.log('asd');
  go(from[0], from[1], 0);
  console.log(currentSmallestEffort);
  return unvisited;
};

function letGetBigger(data) {
  const TIMES = 5;
  const rows = data.length;
  const columns = data[0].length;

  let biggerArray = new Array(rows * TIMES)
    .fill(0)
    .map(() => new Array(columns * TIMES).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      for (let k = 0; k < TIMES; k++) {
        biggerArray[i + k * rows][j + 0 * columns] =
          increase_number_when_9_back_to_1(+data[i][j], 0 + k);
        biggerArray[i + k * rows][j + 1 * columns] =
          increase_number_when_9_back_to_1(+data[i][j], 1 + k);
        biggerArray[i + k * rows][j + 2 * columns] =
          increase_number_when_9_back_to_1(+data[i][j], 2 + k);
        biggerArray[i + k * rows][j + 3 * columns] =
          increase_number_when_9_back_to_1(+data[i][j], 3 + k);
        biggerArray[i + k * rows][j + 4 * columns] =
          increase_number_when_9_back_to_1(+data[i][j], 4 + k);

        biggerArray[i + 0 * rows][j + k * rows] =
          increase_number_when_9_back_to_1(+data[i][j], 0 + k);
        biggerArray[i + 1 * rows][j + k * rows] =
          increase_number_when_9_back_to_1(+data[i][j], 1 + k);
        biggerArray[i + 2 * rows][j + k * rows] =
          increase_number_when_9_back_to_1(+data[i][j], 2 + k);
        biggerArray[i + 3 * rows][j + k * rows] =
          increase_number_when_9_back_to_1(+data[i][j], 3 + k);
        biggerArray[i + 4 * rows][j + k * rows] =
          increase_number_when_9_back_to_1(+data[i][j], 4 + k);
      }
    }
  }

  return biggerArray;
}

let testMatrix = ['01111', '12321', '12521', '12221'];
testMatrix = letGetBigger(testMatrix);
console.log(testMatrix);
// testMatrix = data;
debugger;
const from = [0, 0];
const to = [
  testMatrix.length - 1,
  testMatrix[testMatrix.length - 1].length - 1,
];

let result = travel(testMatrix, from, to);
