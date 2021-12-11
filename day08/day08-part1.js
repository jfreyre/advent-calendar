import { input as data } from '../data/day08.js';

function decodeLine(line) {
  return line.filter((word) => [2, 3, 4, 7].includes(word.length)).length;
}

function resolve() {
  let numberOfUnique = 0;

  for (let i = 0; i < data.length; i++) {
    var output = data[i].split('|')[1].split(' ');
    console.log(output);
    numberOfUnique += decodeLine(output);
  }

  console.log(numberOfUnique);
}

resolve();
