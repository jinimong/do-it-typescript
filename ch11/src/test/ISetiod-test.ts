import { Identity } from '../classes/Identity';

const one = new Identity(1);
const anotherOne = new Identity(1);
const two = new Identity(2);
console.log(
  one.eqauls(anotherOne), // true
  one.eqauls(two), // false
  one.eqauls(1), // false
  one.eqauls(null), // false
  one.eqauls([1]) // false
);
