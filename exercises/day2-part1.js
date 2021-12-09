import { data } from '../data/day2.js';

let x = 0;
let y = 0;

data.forEach((e) => {
  if (e.direction == 'up') {
    x -= e.unit;
  } else if (e.direction == 'down') {
    x += e.unit;
  } else if (e.direction == 'forward') {
    y += e.unit;
  } else if (e.direction == 'backward') {
    y += e.unit;
  }
});
console.log(x, y, x * y);
