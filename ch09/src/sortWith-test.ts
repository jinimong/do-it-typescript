import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';
import { displayPersons } from './displayPersons';

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
const nameSortedPersons = R.sortWith([R.descend(R.prop('name'))])(persons);

displayPersons('sorted by name: ')(nameSortedPersons);
/**
sorted by name:  [ { name: 'Lillian Lambert', age: 37 },
  { name: 'Isabel Hamilton', age: 46 },
  { name: 'Edward Gray', age: 38 },
  { name: 'Danny Fowler', age: 59 } ]
 */
