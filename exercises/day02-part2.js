import { data } from '../data/day02.js';

let x = 0;
let depth = 0;
let aim = 0;

data.forEach((e) => {
  if (e.direction == 'forward') {
    x += e.unit;
    depth += e.unit * aim;
  } else if (e.direction == 'up') {
    //depth -= e.unit;
    aim -= e.unit;
  } else if (e.direction == 'down') {
    //depth += e.unit;
    aim += e.unit;
  }

  /*
  forward X does two things:
It increases your horizontal position by X units.
It increases your depth by your aim multiplied by X.
  */
});

console.log(x, depth, aim, x * aim, x * depth);
