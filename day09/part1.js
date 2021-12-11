import { mock as data } from './data.js';

function resolve() {
  const numOfRows = data.length;
  const numOfCols = data[0].length;

  let lowPoints = [];

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfCols; j++) {
      let isALowPoint = true;
      const current = data[i][j];

      // It'll never be a low point
      if (current == 9) {
        continue;
      }

      isALowPoint =
        (j > 0 ? current < data[i][j - 1] : true) && // we can check previous
        (j < numOfCols - 1 ? current < data[i][j + 1] : true) && // we can check next
        (i > 0 ? current < data[i - 1][j] : true) && // It's not the first line, we can check up
        (i < numOfRows - 1 ? current < data[i + 1][j] : true); // It's not the first line, we can check down

      if (isALowPoint) {
        console.log(`${current} is a low point`);
        lowPoints.push(current);
      }
    }
  }

  console.log(lowPoints.map((e) => e + 1).reduce((a, b) => a + b));
}

resolve();
