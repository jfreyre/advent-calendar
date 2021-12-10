import { input } from '../data/day3.js';

function binToDec(binary) {
  return parseInt(binary, 2);
}

function filter(data, bit, index) {
  return data.length == 1 ? data : data.filter((e) => e[index] == bit);
}

function searchForMostCommon(data, index) {
  let count = 0;
  for (var j = 0; j < data.length; j++) {
    count += +data[j][index];
  }

  let foo = count >= data.length / 2;
  let mostCommon = +foo;

  return mostCommon;
}

function resolve(input) {
  const amountOfBitToCheck = input[0].length;
  let subset = input;

  let i = 0;

  // Check oxygen
  do {
    let mostCommon = searchForMostCommon(subset, i);
    subset = filter(subset, mostCommon, i);
    i++;
  } while (subset.length >= 1 && i <= amountOfBitToCheck);

  const oxygenResult = binToDec(subset[0]);
  console.log(`oxygen is ${subset[0]} - ${oxygenResult}`);

  subset = input;
  i = 0;

  do {
    let leastCommon = !searchForMostCommon(subset, i);
    subset = filter(subset, +leastCommon, i);
    i++;
  } while (subset.length >= 1 && i <= amountOfBitToCheck);

  const co2result = binToDec(subset[0]);
  console.log(`co2 is ${subset[0]} - ${co2result}`);

  console.log('---->', co2result * oxygenResult);
}

resolve(input);
