import { pipe } from './pipe';
import { squaredMap } from './squaredMap';
import { sumArray, sumArrayGeneric } from './sumArray';

const pitagoras = pipe(squaredMap, sumArray, Math.sqrt);
const pitagorasGeneric = pipe(squaredMap, sumArrayGeneric, Math.sqrt);

console.log(pitagoras([3, 4])); // 5
console.log(pitagorasGeneric([6, 8])); // 10
