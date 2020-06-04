import { printValue, Valuable } from './printValue';

printValue(new Valuable<number>(1)); // 1
printValue(new Valuable<boolean>(true)); // true
printValue(new Valuable<string>('hello')); // hello
printValue(
  new Valuable<number[]>([1, 2, 3])
); // [ 1, 2, 3 ]

// 타입 변수 생략
printValue(new Valuable(1)); // 1
printValue(new Valuable(true)); // true
printValue(new Valuable('hello')); // hello
printValue(new Valuable([1, 2, 3])); // [ 1, 2, 3 ]
