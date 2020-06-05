import { parseNumber } from '../option/parseNumber';

let value = parseNumber('1')
  .map((value) => value + 1) // 2
  .map((value) => value * 2) // 4
  .getOrElse(0);
console.log(value); // 4

value = parseNumber('hello world')
  .map((value) => value + 1) // 콜백함수 호출되지 않음
  .map((value) => value * 2) // 콜백함수 호출되지 않음
  .getOrElse(0); // 0
console.log(value); // 0
