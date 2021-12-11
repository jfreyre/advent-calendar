import { input } from './data.js';

let max = input[0];

let count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i - 1] < input[i]) {
    count++;
  }
}

console.log(count);
