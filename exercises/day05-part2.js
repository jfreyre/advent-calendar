import { input as data } from '../data/day05.js';

const flat = data.flat();
const xValuesOnly = flat.filter((e, i) => i % 4 == 0 || i % 4 == 2);
const yValuesOnly = flat.filter((e, i) => i % 4 == 1 || i % 4 == 3);

const maxX = Math.max(...xValuesOnly);
const maxY = Math.max(...yValuesOnly);

function initArray(x, y) {
  let vents = [];

  for (let row = 0; row <= y; row++) {
    vents.push(new Array(x + 1).fill(0));
  }

  return vents;
}

function fillArray(vents) {
  for (var i = 0; i < data.length; i++) {
    let coords = data[i];

    // Update only when x1 = x2 or y1 = y2
    if (coords[0] == coords[2] || coords[1] === coords[3]) {
      fillVerticalOrHorizontal(vents, coords);
    } else {
      fillDiagonal(vents, coords);
    }
  }
}

function fillVerticalOrHorizontal(vents, coords) {
  const currentMinX = Math.min(coords[0], coords[2]);
  const currentMaxX = Math.max(coords[0], coords[2]);
  const currentMinY = Math.min(coords[1], coords[3]);
  const currentMaxY = Math.max(coords[1], coords[3]);

  for (var j = currentMinX; j <= currentMaxX; j++) {
    for (var k = currentMinY; k <= currentMaxY; k++) {
      vents[k][j]++;
    }
  }
}

function fillDiagonal(vents, coords) {
  const dist = Math.abs(coords[0] - coords[2]);
  for (var i = 0; i <= dist; i++) {
    const nextX = coords[0] < coords[2] ? coords[0] + i : coords[0] - i;
    const nextY = coords[1] < coords[3] ? coords[1] + i : coords[1] - i;

    vents[nextY][nextX]++;
  }
}

function checkInArray(vents) {
  return vents.flat().filter((e) => e >= 2).length;
}

function resolve() {
  // Init Array
  let vents = initArray(maxX, maxY);

  fillArray(vents);
  let check = checkInArray(vents);

  console.log('amount of multiple', check);
  console.log(maxX, maxY);
  return;
  for (var i = 0; i < vents.length; i++) {
    console.log(vents[i]);
  }
}

resolve();
