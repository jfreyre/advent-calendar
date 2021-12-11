import { input as data } from '../data/day06.js';

// We build an array with the amount of occurence
// index = days; value = amount of lantern fish

let sortedLanternFish = new Array(9).fill(0);
for (var i = 0; i < data.length; i++) {
  sortedLanternFish[data[i]] += 1;
}

const AMOUNT_OF_DAYS = 18;
const LIFE_FOR_EXISTING = 6;
const LIFE_FOR_NEW = 8;

console.log(sortedLanternFish);

for (let i = 0; i < AMOUNT_OF_DAYS; i++) {
  const reproducingFish = sortedLanternFish.shift();
  sortedLanternFish.push(reproducingFish); // They create new fishes
  sortedLanternFish[LIFE_FOR_EXISTING] += reproducingFish; // They restart
}

const result = sortedLanternFish.reduce((a, b) => a + b);

console.log(result);
return;

// console.log(sortedLanternFish);

// function countAmountOfLanternWithAStartAt(initialAmountOfDays) {
//   // We create an array with a single item for the value and will run the process for that item only
//   var temp = [initialAmountOfDays];

//   for (var day = 0; day < AMOUNT_OF_DAYS; day++) {
//     var lanternfishToCreate = 0;

//     for (var j = 0; j < temp.length; j++) {
//       var current = temp[j];
//       // Reset
//       if (current == 0) {
//         temp[j] = LIFE_FOR_EXISTING;
//         lanternfishToCreate++;
//       } else {
//         temp[j]--;
//       }
//     }

//     if (lanternfishToCreate > 0) {
//       var t = new Array(lanternfishToCreate).fill(LIFE_FOR_NEW);
//       temp.push(...t);
//     }
//   }

//   console.log('At the end of the count, we have ', temp.length);

//   return temp.length;
// }
// function resolve() {
//   let sum = 0;

//   // We do the calculation for each single values to reduce the footprint
//   for (var i = 0; i < sortedLanternFish.length; i++) {
//     if (sortedLanternFish[i] > 0) {
//       console.log(
//         'start for ',
//         i,
//         'with a amount of lanterns of ',
//         sortedLanternFish[i]
//       );

//       var result = countAmountOfLanternWithAStartAt(i);

//       sum += result * sortedLanternFish[i];
//     } else {
//       console.log('no lantern with a life of ', i);
//     }
//   }

//   console.log(sum);
// }

// resolve();

// // const AMOUNT_OF_DAYS = 18;
// // const LIFE_FOR_EXISTING = 6;
// // const LIFE_FOR_NEW = 8;

// // function countForLantern(days) {
// //   if (days <= 0) {
// //     return 0;
// //   }

// //   let newDays = days - LIFE_FOR_NEW;
// //   let amount = parseInt(newDays / LIFE_FOR_NEW);

// //   return amount + countForLantern(newDays - LIFE_FOR_NEW);
// // }

// // function resolve() {
// //   var sum = data.length;
// //   for (var i = 0; i < data.length; i++) {
// //     console.log('---> ', data[i]);
// //     let daysAfterFirstEnd = AMOUNT_OF_DAYS - data[i];
// //     let amount = parseInt(daysAfterFirstEnd / LIFE_FOR_EXISTING);

// //     let test = countForLantern(daysAfterFirstEnd);
// //     console.log(daysAfterFirstEnd, amount, test);

// //     sum += amount;
// //     sum += test;
// //   }

// //   console.log(sum);
// // }

// // resolve();

// // console.log(`5934 is the expected answer`);
