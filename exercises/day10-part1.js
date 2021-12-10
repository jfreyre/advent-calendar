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

const OPENING = Object.values(map);
const CLOSING = Object.keys(map);

function isIncomplete(s) {
  OPENING.map((c) => {
    (s.match(`${c}`) || []).length;
  });
}

function isValid(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (OPENING.indexOf(s[i]) >= 0) {
      stack.push(s[i]);
    } else if (stack[stack.length - i] === map[s[i]]) {
      stack.pop();
    } else {
      return s[i];
    }
  }

  return stack.length ? stack : true;
}
function analyseLine(line) {
  if (isIncomplete(line)) {
    return 0;
  }

  let r = isValid(line);
  if (r === true) {
    console.log(line, 'is valid');
  } else {
    console.log(r, scores[r]);
  }

  return scores[r];
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
