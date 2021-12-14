import { input as data, folds as folds } from './data.js';

function maxX() {
  return [...data].sort((a, b) => b[0] - a[0])[0][0] + 1;
}

function maxY() {
  return [...data].sort((a, b) => b[1] - a[1])[0][1] + 1;
}

function display(array) {
  var t = array.map((e) => e.join('')).join('\n');
  console.log(t);
}

function foldY(array) {
  let newHeight = parseInt(array.length / 2);
  let newArray = new Array(newHeight);

  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = array[i];
    for (let j = 0; j < array[array.length - i - 1].length; j++) {
      let vv = array[array.length - i - 1][j];
      if (vv === '#') newArray[i][j] = '#';
    }
  }

  return newArray;
}

function foldX(array) {
  let newArray = new Array(array.length);
  let newWidth = Math.floor(array[0].length / 2);

  for (let i = 0; i < array.length; i++) {
    newArray[i] = new Array(newWidth);
    for (let j = 0; j < newWidth; j++) {
      newArray[i][j] = array[i][j];
      let opposite = array[i][array[i].length - j - 1];
      if (opposite === '#') {
        newArray[i][j] = '#';
      }
    }
  }
  return newArray;
}

function fold(array, fold) {
  if (fold.a === 'y') {
    return foldY(array);
  } else {
    return foldX(array);
  }
}
function visible(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j] === '#';
    }
  }

  console.log(sum);
}
function solve() {
  // Init array
  let array = new Array(maxY());

  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(maxX()).fill('.');
  }

  display(array);

  for (let i = 0; i < data.length; i++) {
    let current = data[i];

    array[current[1]][current[0]] = '#';
  }

  display(array);

  array = fold(array, folds[0]);

  display(array);

  array = fold(array, folds[1]);
  visible(array);
  display(array);
}

solve();
