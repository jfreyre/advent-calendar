import { data as data } from './data.js';

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

let testMatrix = ['01111', '12321', '12521', '12221'];

testMatrix = data;
debugger;
const from = [0, 0];
const to = [
  testMatrix.length - 1,
  testMatrix[testMatrix.length - 1].length - 1,
];

let result = travel(testMatrix, from, to);

// 502 -> too high
// 493 -> too slow
// 498 -> OK ?
// result.forEach((a) =>
//   console.log(
//     a
//       .map((v) => (v === Number.MAX_VALUE ? '**' : ('00' + v).slice(-3)))
//       .join(' ')
//   )
// );
