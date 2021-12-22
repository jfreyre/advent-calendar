import { data as data } from './data.js';
const MAX_LIGHT_VALUE = 9;

function step(state) {
  let flashes = 0;

  function increment(x, y) {
    // Are we out of bound ?
    if (x < 0 || y < 0 || x > 9 || y > 9) {
      return;
    }

    state[x][y]++;

    if (state[x][y] > MAX_LIGHT_VALUE) {
      flashes++;
      state[x][y] = -20;
      increment(x - 1, y - 1);
      increment(x - 1, y + 0);
      increment(x - 1, y + 1);
      increment(x + 0, y - 1);
      increment(x + 0, y + 0);
      increment(x + 0, y + 1);
      increment(x + 1, y - 1);
      increment(x + 1, y + 0);
      increment(x + 1, y + 1);
    }
  }

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      increment(x, y);
    }
  }

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (state[x][y] < 0) {
        state[x][y] = 0;
      }
    }
  }

  return flashes;
}

const grid = data;
let answer = 0;

let i = 0;
do {
  i++;
  answer = step(grid);
} while (answer != 100);
console.log(i);
