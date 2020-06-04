import * as R from 'ramda';

const input = [1, 2, 3];

const callAndAppend = R.pipe(
  R.ap([R.multiply(2)]),
  R.tap((a) => console.log(a))
);
const callAndAppend2 = R.pipe(
  R.ap([R.multiply(2), R.add(10)]),
  R.tap((a) => console.log(a))
);
const repeat = (N, cb) => R.range(1, N + 1).map((n) => cb);
const callAndAppend3 = R.pipe(
  R.ap(repeat(3, R.identity)),
  R.tap((a) => console.log(a))
);

const result = callAndAppend(input); // [ 2, 4, 6 ]
const result2 = callAndAppend2(input); // [ 2, 4, 6, 11, 12, 13 ]
const result3 = callAndAppend3(input); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]
