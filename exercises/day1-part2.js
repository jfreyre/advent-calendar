import { input } from '../data/day1.js';

let count = 0;
let sum = input[0] + input[1] + input[2];
for (let i = 2; i < input.length; i++) {
  let currentSum = input[i] + input[i - 1] + input[i - 2];
  if (currentSum > sum) {
    count++;
  }
  sum = currentSum;
}

console.log(count);
