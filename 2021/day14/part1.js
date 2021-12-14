import { mock as data, mockPolymer as polymer } from './data.js';

function solve() {
  let output = '';
  for (let i = 0; i < polymer.length - 1; i++) {
    let sub = polymer.substring(i, i + 1);
    console.log(sub);

    let index = data.indexOf(sub);
    if (index => 0) {
      output += `${polymer[i]}${index}${polymer[i+1]}`
    } else {
      output += sub;
    }
  }
  console.log(output)
}

solve();
