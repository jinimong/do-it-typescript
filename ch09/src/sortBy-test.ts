import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';
import { displayPersons } from './displayPersons';

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
const nameSortedPersons = R.sortBy(R.prop('name'))(persons);
const ageSortedPersons = R.sortBy(R.prop('age'))(persons);

displayPersons('sorted by name:')(nameSortedPersons);
/**
sorted by name: [ { name: 'Caroline Blair', age: 48 },
  { name: 'Clifford Russell', age: 32 },
  { name: 'Francisco Fitzgerald', age: 56 },
  { name: 'Mabelle Robertson', age: 63 } ]
 */

displayPersons('sorted by age:')(ageSortedPersons);
/**
sorted by age: [ { name: 'Clifford Russell', age: 32 },
  { name: 'Caroline Blair', age: 48 },
  { name: 'Francisco Fitzgerald', age: 56 },
  { name: 'Mabelle Robertson', age: 63 } ]
 */
