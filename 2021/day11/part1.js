import { mock as data } from './data.js';
const MAX_LIGHT_VALUE = 9;
let flashes = 0;

function display() {
  return;
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

let shouldFlash = (v) => v > MAX_LIGHT_VALUE;

function flash(flashed, i, j) {
  const key = i + '_' + j;

  if (i < 0 || j < 0 || i > data.length - 1 || j > data[i].length - 1) {
    return;
  }

  // Exit condition
  if (flashed.indexOf(key) >= 0) {
    return;
  }

  flashed.push(key);

  for (var verticalIndex = -1; verticalIndex <= 1; verticalIndex++) {
    for (var horizontalIndex = -1; horizontalIndex <= 1; horizontalIndex++) {
      // We don't update ourselves
      if (verticalIndex == 0 && horizontalIndex == 0) {
        continue;
      }

      const vert = i + verticalIndex;
      const hori = j + horizontalIndex;

      // We don't care if we're out of range
      let outOfRange =
        vert < 0 ||
        hori < 0 ||
        vert > data.length - 1 ||
        hori > data.length - 1;
      if (outOfRange) {
        continue;
      }
      data[vert][hori] += 1;

      if (shouldFlash(data[vert][hori])) {
        flash(flashed, vert, hori);
      }
    }
  }
}

function step() {
  console.log('new step');
  let flashed = [];

  // First we update everybody
  for (var i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      data[i][j] += 1;

      if (shouldFlash(data[i][j])) {
        flash(flashed, i, j);
      }
    }
  }

  console.log(flashed.length, flashed);

  // Then we clean
  for (let i = 0; i < flashed.length; i++) {
    const coords = flashed[i].split('_');
    data[coords[0]][coords[1]] = 0;
  }

  display();

  return flashed;
}

function solve() {
  const iteration = 100;
  for (let i = 0; i < iteration; i++) {
    let result = step();
    flashes += result.length;
  }

  console.log(flashes);
}

// not 1656 (too high)
// not 1971 (too high)

solve();
