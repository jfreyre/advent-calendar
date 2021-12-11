import { mock as data } from './data.js';
const MAX_LIGHT_VALUE = 9;
let flashes = 0;

function flash(flashed, i, j) {
  // Exit condition
  if (flashed.indexOf(i + '_' + j) >= 0) {
    return;
  }

  flashed.push(i + '_' + j);

  console.log('flashing ', i, ' ', j);

  for (var verticalIndex = -1; verticalIndex <= 1; verticalIndex++) {
    for (var horizontalIndex = -1; horizontalIndex <= 1; horizontalIndex++) {
      try {
        if (verticalIndex == 0 && horizontalIndex == 0) {
          continue;
        }
        data[i + verticalIndex][j + horizontalIndex] += 1;

        if (data[i + verticalIndex][j + horizontalIndex] > MAX_LIGHT_VALUE) {
          flashed(flashed, i + verticalIndex, j + horizontalIndex);
        }
      } catch (e) {
      } finally {
      }
    }
  }
}

function step() {
  console.log('new step');
  // First we update everybody
  for (var i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      data[i][j] += 1;
    }
  }

  let flashed = [];
  for (var i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] > MAX_LIGHT_VALUE) {
        flash(flashed, i, j);
      }
    }
  }

  console.log(flashed.length, flashed);

  // Then we clean
  for (var i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] > MAX_LIGHT_VALUE) {
        data[i][j] = 0;
      }
    }
  }

  return flashed;
}

function solve() {
  const iteration = 10;
  for (let i = 0; i < iteration; i++) {
    let result = step();
    flashes += result.length;
  }

  console.log(flashes);
}

solve();
