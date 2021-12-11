import { mock as data } from '../data/day10.js';
let scores = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};
let map = {
  ')': '(',
  '}': '{',
  ']': '[',
  '>': '<',
};

const sumReducer = (previousValue, currentValue) =>
  previousValue + currentValue;

const OPENING = Object.values(map);
const CLOSING = Object.keys(map);

function analyseLine(line) {
  let stack = [];
  let i = 0;
  let error = null;
  while (i < line.length && error === null) {
    const current = line[i];
    if (OPENING.indexOf(current) >= 0) {
      stack.push(current);
    } else if (stack[stack.length - 1] === map[current]) {
      stack.pop();
    } else {
      error = current;
      console.log('should not be there', current);
    }
    i++;
  }

  console.log(stack, scores[stack[0]]);
  return stack.length ? scores[stack.pop()] : 0;
}
function resolve() {
  let score = 0;
  for (var i = 0; i < data.length; i++) {
    console.log('new lien');
    const line = data[i];
    score += analyseLine(line);
  }

  console.log('final score is ', score);
}

resolve();
