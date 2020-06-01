import { reduce, reduceGeneric } from './reduce';

const sum = (result, value) => result + value;

export const sumArray = reduce(sum, 0);
export const sumArrayGeneric = reduceGeneric(sum, 0);
