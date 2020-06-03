import * as R from 'ramda';

const left = { name: 'Jack' };
const right = {
  name: 'Jane',
  age: 32,
};

console.log(R.mergeLeft(left, right)); // { name: 'Jack', age: 32 }
console.log(R.mergeRight(left, right)); // { name: 'Jane', age: 32 }
