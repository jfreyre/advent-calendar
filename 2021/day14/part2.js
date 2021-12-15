import { map as map, template as template } from './data.js';

const STEP = 40;
let characters = [];

function buildPolymer(template) {
  console.log('template is ', template);
  let polymer = [];
  for (let i = 0; i < template.length - 1; i++) {
    let pair = template.slice(i, i + 2);
    add_pair(polymer, pair, 1);
  }
  return polymer;
}

function add_pair(input, pair, occurence) {
  const inputIndex = input.findIndex((item) => item[0] == pair);
  if (inputIndex >= 0) {
    input[inputIndex][1] += occurence;
  } else {
    input.push([pair, occurence]);
  }
}

function add_letter(letter, number_of_times) {
  const index = characters.findIndex((item) => item[0] == letter);
  if (index < 0) {
    characters.push([letter, 1]);
  } else {
    characters[index][1] += number_of_times;
  }
}

function countCharacters() {
  console.log('characters are', characters);

  let t = characters.map((e) => e[1]).sort((a, b) => b - a);
  console.log('delta min max is ', t[0] - t[t.length - 1]);
}

function solve() {
  let polymer = buildPolymer(template);

  // We store the initial letters of the polymer
  for (let i = 0; i < template.length; i++) {
    add_letter(template[i], 1);
  }

  for (let step = 0; step < STEP; step++) {
    let copy = [];

    for (let i = 0; i < polymer.length; i++) {
      const item = polymer[i];
      let pair = item[0];

      const index = map[pair];

      if (index !== undefined) {
        add_pair(copy, pair[0] + index, item[1]);
        add_pair(copy, index + pair[1], item[1]);
        add_letter(index, item[1]);
      }
    }
    debugger;
    polymer = copy;
    console.log(characters);
  }

  countCharacters();
}

solve();

// not 559 <== 989 - 430
