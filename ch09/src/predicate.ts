import * as R from 'ramda';

R.pipe(
  R.filter(R.lte(3)),
  R.tap((n) => console.log(n)) // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
)(R.range(1, 10 + 1));

R.pipe(
  R.filter(R.flip(R.gte)(3)),
  R.tap((n) => console.log(n)) // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
)(R.range(1, 10 + 1));

R.pipe(
  R.filter(R.gt(6 + 1)),
  R.tap((n) => console.log(n)) // [ 1, 2, 3, 4, 5, 6 ]
)(R.range(1, 10 + 1));

R.pipe(
  R.filter(R.lte(3)),
  R.filter(R.gt(6 + 1)),
  R.tap((n) => console.log(n)) // [ 3, 4, 5, 6 ]
)(R.range(1, 10 + 1));
