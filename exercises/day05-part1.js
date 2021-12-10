import { input as data } from '../data/day05.js';

const flat = data.flat();
const xValuesOnly = flat.filter((e, i) => i % 4 == 0 || i % 4 == 2);
const yValuesOnly = flat.filter((e, i) => i % 4 == 1 || i % 4 == 3);

const minX = Math.min(...xValuesOnly);
const minY = Math.min(...yValuesOnly);
const maxX = Math.max(...xValuesOnly);
const maxY = Math.max(...yValuesOnly);

function initArray(minx, minY, maxX, maxY) {
  let vents = [];

  for (let row = 0; row <= maxY; row++) {
    vents.push(new Array(maxX + 1).fill(0));
  }

  return vents;
}

function fillArray(vents) {
  for (var i = 0; i < data.length; i++) {
    let coords = data[i];
    let currentMinX = Math.min(coords[0], coords[2]);
    let currentMaxX = Math.max(coords[0], coords[2]);
    let currentMinY = Math.min(coords[1], coords[3]);
    let currentMaxY = Math.max(coords[1], coords[3]);
    // Update only when x1 = x2 or y1 = y2
    if (coords[0] == coords[2] || coords[1] === coords[3]) {
      for (var j = currentMinX; j <= currentMaxX; j++) {
        for (var k = currentMinY; k <= currentMaxY; k++) {
          // console.log('update', j, k);
          vents[k][j]++;
        }
      }
    }
  }
}

function checkInArray(vents) {
  return vents.flat().filter((e) => e >= 2).length;
}

function resolve() {
  // Init Array
  let vents = initArray(minX, minY, maxX, maxY);

  fillArray(vents);
  let check = checkInArray(vents);
  console.log(check);
  console.log(minX, minY, maxX, maxY);
  return;
  for (var i = 0; i < vents.length; i++) {
    console.log(vents[i]);
  }
}

resolve();
