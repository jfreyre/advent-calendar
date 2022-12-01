import { DATA as input } from './data.js';

let sum = 0;
let max = 0;
for (let i = 0; i <= input.length; i++) {
  const current = input[i];

  if (current === '') {
    max = sum > max ? sum : max;

    sum = 0;
  } else {
    sum += +current;
  }
}

console.log(max);
