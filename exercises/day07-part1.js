import { input as data } from '../data/day7.js';

function calculateEffort(index) {
  let effort = 0;
  for (var i = 0; i < data.length; i++) {
    let current = Math.abs(data[i] - index);

    effort += current;
  }
  return effort;
}

function resolve() {
  let minEffort = Number.MAX_SAFE_INTEGER;

  for (var i = 0; i < data.length; i++) {
    let currentEffort = calculateEffort(i);

    if (currentEffort < minEffort) {
      console.log('new min effort on ', currentEffort);
      minEffort = currentEffort;
    }
  }
}

resolve();
