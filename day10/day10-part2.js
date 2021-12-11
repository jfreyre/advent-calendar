import { input as data } from '../data/day10.js';
let scores = {
  '(': 1,
  '[': 2,
  '{': 3,
  '<': 4,
};

let map = {
  ')': '(',
  '}': '{',
  ']': '[',
  '>': '<',
};

const OPENING = Object.values(map);
const CLOSING = Object.keys(map);

function lineHasError(line) {
  let stack = [];
  let i = 0;
  while (i < line.length) {
    const current = line[i];
    // New opening
    if (OPENING.indexOf(current) >= 0) {
      stack.push(current);

      // Correct closing
    } else if (stack[stack.length - 1] === map[current]) {
      stack.pop();

      // MEh.... now we ignore erroneous
    } else {
      return [];
    }
    i++;
  }
  return stack;
}

function resolveStack(stack) {
  let completion = 0;
  let current = null;
  while ((current = stack.pop())) {
    completion *= 5;
    completion += scores[current];
    //console.log('--->', completion, current, scores[current]);
  }
  return completion;
}

function resolve() {
  let scores = [];
  for (var i = 0; i < data.length; i++) {
    const line = data[i];

    const t = lineHasError(line);
    if (t.length > 0) {
      scores.push(resolveStack(t));
    }
  }

  scores = scores.sort((a, b) => a - b);

  console.log('final score is ', scores[parseInt(scores.length / 2)]);
}

resolve();
