import { mockMap as map, mockPolymer as polymer } from './data.js';

function step(input) {
  let output = input[0];

  for (let i = 0; i < input.length - 1; i++) {
    let sub = input.substring(i, i + 2);

    let index = map[sub];
    // console.log(sub, index);
    if (index !== undefined) {
      output += `${index}${input[i + 1]}`;
    } else {
      output += sub;
    }
  }

  return output;
}

function explode(polymer) {
  const counts = {};

  for (const num of polymer) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
}

function solve() {
  let growingPolymer = polymer;
  for (let i = 0; i < 40; i++) {
    growingPolymer = step(growingPolymer);
    console.log(growingPolymer.length, growingPolymer);
  }

  let counts = explode(growingPolymer);
  console.log(counts);
}

solve();

// 2333073 too high
// 2484561 too high
