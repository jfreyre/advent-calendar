import { MOCK as input } from './data.js';

let sums = [0];
let index = 0;

for (let i = 0; i <= input.length; i++) {
  const current = input[i];

  if (current === '') {
    index++;
    sums.push(0);
  } else {
    sums[index] += +current;
  }
}

sums = sums.sort((a, b) => (a > b ? -1 : 1));

console.log(sums);
console.log(sums[0] + sums[1] + sums[2]);
