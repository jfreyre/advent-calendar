import { mock1 as data } from './data.js';

import hex2Bin from 'hex-to-bin';
import binary from 'binary-to-decimal';

const binaryValue = hex2Bin(data);

const version = binary.decimal(binaryValue.substring(0, 3));
const typeId = binary.decimal(binaryValue.substring(3, 6));

console.log(binaryValue);
console.log(version);
console.log(typeId);

// This is a literal value
if (typeId === 4) {
  let partA = binaryValue.substring(7, 11);
  let partB = binaryValue.substring(12, 16);
  let partC = binaryValue.substring(17, 21);
  console.log(partA, partB, partC);
  console.log(binary.decimal((partA + partB + partC).substr()));
}
