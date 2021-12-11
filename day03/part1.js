import { input } from './data.js';

let gamma = '';
let epsilon = '';

function binToDec(binary) {
  return parseInt(binary, 2);
}

function resolve(input) {
  const length = input[0].length;

  for (var i = 0; i < length; i++) {
    let count = 0;
    for (var j = 0; j < input.length; j++) {
      count += +input[j][i];
    }

    if (count >= input.length / 2) {
      gamma += '1';
      epsilon += '0';
    } else {
      gamma += '0';
      epsilon += '1';
    }
  }

  console.log(gamma, epsilon);

  let a = binToDec(gamma);
  let b = binToDec(epsilon);

  console.log(a, b, a * b);
}

resolve(input);
