import { mock as data } from './data.js';
const MAX_LIGHT_VALUE = 9;
function flash(flashed, i, j) {
  // Exit condition
  if (flashed.indexOf(i + '' + j) >= 0) {
    return;
  }

  for (var updatedI = -1; updatedI <= 1; updatedI++) {
    for (var updatedJ = -1; updatedJ <= 1; updatedJ++) {
      try {
        data[updatedI][updatedJ] += 1;
        flashed.push(updatedI + '' + updatedJ);
        if (data[updatedI][updatedJ] >= MAX_LIGHT_VALUE) {
          flashed(flashed, updatedI, updatedJ);
        }
      } finally {
      }
    }
  }
}

function step() {
  // First we update everybody
  for (var i = 0; i < data.length; i++) {
    for (let j = 0; i < data[i].length; j++) {
      data[i][j] += 1;
    }
  }

  let flashed = [];
  for (var i = 0; i < data.lengt; i++) {
    for (let j = 0; i < data[i].length; j++) {
      if (data[i][j] >= MAX_LIGHT_VALUE) {
        flash(flashed, i, j);
      }
    }
  }

  // Then we clean
  for (var i = 0; i < data.lengt; i++) {
    for (let j = 0; i < data[i].length; j++) {
      if (data[i][j] >= MAX_LIGHT_VALUE) {
        data[i][j] = 0;
      }
    }
  }
}

function solve() {
  const iteration = 3;
  for (let i = 0; i < iteration; i++) {
    step();
  }
}

solve();
