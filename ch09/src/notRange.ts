import * as R from 'ramda';
import { selectRange } from './selectRange';

const notRange = (min: number, max: number) =>
  R.pipe(selectRange(min, max), R.not);

R.pipe(
  R.filter(notRange(3, 6 + 1)),
  R.tap((n) => console.log(n)) // [ 1, 2, 7, 8, 9, 10 ]
)(R.range(1, 10 + 1));
