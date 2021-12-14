import { mockMap as map, mockPolymer as polymer } from './data.js';

function solve() {
  let output = '';
  for (let i = 0; i < polymer.length - 1; i++) {
    let sub = polymer.substring(i, i + 2);
    console.log(sub);

    let index = map[sub];
    console.log(index, sub, 'a');
    if (index !== undefined) {
      output += `${polymer[i]}${index}${polymer[i + 1]}`;
    } else {
      output += sub;
    }
  }
  console.log('a', output);
}

solve();
