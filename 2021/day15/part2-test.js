import { data as input } from './data.js';
import directions from 'directions';

function updateValue(value, amount) {
  value += amount;
  return value > 9 ? value % 9 : value;
}

function letGetBigger(data) {
  const TIMES = 1;

  const rows = data.length;
  const columns = data[0].length;

  let biggerArray = new Array(rows * TIMES)
    .fill(0)
    .map(() => new Array(columns * TIMES).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const value = +data[i][j];
      for (let k = 0; k < TIMES; k++) {
        for (let m = 0; m < TIMES; m++) {
          biggerArray[i + k * rows][j + m * columns] = updateValue(
            value,
            m + k
          );
          biggerArray[i + m * rows][j + k * rows] = updateValue(value, m + k);
        }
      }
    }
  }

  return biggerArray;
}

function buildGraph(data) {
  var someDirections = directions();

  const height = data.length;
  const width = data[0].length; // We know it's always the same

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let v = data[i][j];

      if (i > 0) {
        someDirections.fromTo(i + '_' + j, i - 1 + '_' + j, v);
      }

      if (j > 0) {
        someDirections.fromTo(i + '_' + j, i + '_' + (j - 1), v);
      }

      if (i < height - 1) {
        someDirections.fromTo(i + '_' + j, i + 1 + '_' + j, v);
      }

      if (j < width - 1) {
        someDirections.fromTo(i + '_' + j, i + '_' + (j + 1), v);
      }
    }
  }
  console.log('yyy');
  return someDirections;
}

let testMatrix = letGetBigger(input);

const g = buildGraph(testMatrix);

var data = g.getPath(
  '0_0',
  testMatrix.length - 1 + '_' + (testMatrix[0].length - 1)
);
console.log('cost', data.cost); // 2.7
console.log('path', data.path); // [ 'alpha', 'idle', 'omega' ]
// testMatrix = data;
