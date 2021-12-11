import { mock as data } from './data.js';

const AMOUNT_OF_DAYS = 80;
function resolve() {
  for (var day = 0; day < AMOUNT_OF_DAYS; day++) {
    var lanternfishToCreate = 0;

    for (var i = 0; i < data.length; i++) {
      var current = data[i];
      // Reset
      if (current == 0) {
        data[i] = 6;
        lanternfishToCreate++;
      } else {
        data[i] -= 1;
      }
    }

    var t = new Array(lanternfishToCreate).fill(8);
    data.push(...t);

    console.log(data.length);
  }
}

resolve();
