import { mock as data } from './data.js';


const travel = (array, from, to) => {

  const go = (i, j, smallest) => {
    // Current score is already to high
    if (smallest >= currentSmallestEffort) {
      return;
    }

    // We've reached the destination!
    if (i == to[0] && j == to[1]) {
      currentSmallestEffort = smallest;

      // console.log('reached!', smallest);
      return;
    }

    if (unvisited[i]?.[j] > smallest) {
      unvisited[i][j] = smallest;
      let value = smallest + +array[i][j];

      go(i, j + 1, value);
      go(i - 1, j, value);
      go(i + 1, j, value);
      go(i, j - 1, value);
    }
  };

  let currentSmallestEffort = Number.MAX_VALUE;
  // We build a matrix with hight cost
  let unvisited = array.map((a) => a.split('').map((_) => Number.MAX_VALUE));

  // debugger;
  console.log('asd');
  go(from[0], from[1], 0);
  console.log(currentSmallestEffort);
  return unvisited;
};



function buildGraph() {
  let graph = {};

  for(let i = 0; i < data; i++) {
    if (g.indexOf())
  }
  
}

function solve() {
  buildGraph();
}


solve();