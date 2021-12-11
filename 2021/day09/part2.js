import { input as data } from './data.js';

Array.prototype.getUnique = function () {
  var o = {},
    a = [];
  for (var i = 0; i < this.length; i++) o[this[i]] = 1;
  for (var e in o) a.push(e);
  return a;
};

const numOfRows = data.length;
const numOfCols = data[0].length;

function buildLowPoints() {
  let lowPoints = [];

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfCols; j++) {
      let isALowPoint = true;
      const current = data[i][j];

      // It'll never be a low point
      if (current == 9) {
        continue;
      }

      isALowPoint =
        (j > 0 ? current < data[i][j - 1] : true) && // we can check previous
        (j < numOfCols - 1 ? current < data[i][j + 1] : true) && // we can check next
        (i > 0 ? current < data[i - 1][j] : true) && // It's not the first line, we can check up
        (i < numOfRows - 1 ? current < data[i + 1][j] : true); // It's not the first line, we can check down

      if (isALowPoint) {
        console.log(`${current} is a low point`);
        lowPoints.push([i, j]);
      }
    }
  }

  return lowPoints;
}

function buildBassin(i, j) {
  const current = data[i][j];

  if (current == 9) {
    return [];
  }

  let neighboors = [`${i}${j}`];

  if (i > 0 && current < data[i - 1][j]) {
    let r = buildBassin(i - 1, j);
    neighboors.push(...r);
  }

  if (i < numOfRows - 1 && current < data[i + 1][j]) {
    let r = buildBassin(i + 1, j);
    neighboors.push(...r);
  }

  if (j > 0 && current < data[i][j - 1]) {
    let r = buildBassin(i, j - 1);
    neighboors.push(...r);
  }

  if (j < numOfCols - 1 && current < data[i][j + 1]) {
    let r = buildBassin(i, j + 1);
    neighboors.push(...r);
  }

  return neighboors;
}

function resolve() {
  let lowPoints = buildLowPoints();

  var t = lowPoints
    .map((e) => {
      return buildBassin(e[0], e[1]);
    })
    .map((e) => e.getUnique())
    .sort((a, b) => b.length - a.length)
    .splice(0, 3);
  console.log(t);
}

resolve();
