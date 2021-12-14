import { mockMap as map, mockPolymer as polymer } from './data.js';

let polymer_template = polymer;

let pairs_with_occurences = [];

var add_pair = function (pair, input, output) {
  const index = input.findIndex((item) => item[0] == pair);
  if (index >= 0) {
    output[index][1]++;
  } else {
    output.push([pair, 1]);
  }
};

for (let i = 0; i < polymer_template.length - 1; i++) {
  let pair = polymer_template.slice(i, i + 2);
  add_pair(pair, pairs_with_occurences, pairs_with_occurences);
}

console.log(pairs_with_occurences);

for (let step = 0; step < 40; step++) {
  let copy = [...pairs_with_occurences];

  for (let i = 0; i < pairs_with_occurences.length; i++) {
    let pair = pairs_with_occurences[i][0];

    const index = map[pair];

    if (index !== undefined) {
      add_pair(pair[0] + index, pairs_with_occurences, copy);
      add_pair(index + pair[1], pairs_with_occurences, copy);
    }
  }

  pairs_with_occurences = copy;
  console.log(copy);
}

// Get every caracters
let characters = {};
for (const pair of pairs_with_occurences) {
  if (characters.hasOwnProperty(pair[0][0])) {
    characters[pair[0][0]] += pair[1];
  } else {
    characters[pair[0][0]] = pair[1];
  }

  if (characters.hasOwnProperty(pair[0][1])) {
    characters[pair[0][1]] += pair[1];
  } else {
    characters[pair[0][1]] = pair[1];
  }
}

console.log(characters);
