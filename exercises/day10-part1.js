import { mock as data } from '../data/day10.js';

const OPENING_CHAR = ['(', '[', '{', '<'];
const CLOSING_CHAR = [')', ']', '}', '>'];

function analyseLine(line) {
  let i = 0;
  while (i < line.length) {
    const current = line[i];
    if (OPENING_CHAR.indexOf >= 0) {

    }
    
    i++;
  }
}
function resolve() {
  let score = 0;
  for (var i = 0; i < data.length; i++) {
    const line = data[i];
    score += analyseLine(line);
  }

  console.log('final score is ', score);
}

resolve();
