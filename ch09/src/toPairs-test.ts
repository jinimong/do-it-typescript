import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';

const person: IPerson = makeRandomIPerson();
const pairs: [string, any][] = R.toPairs(person);
console.log(pairs);

/**
[ [ 'name', 'Elijah Shelton' ],
  [ 'age', 50 ],
  [ 'title', 'Political Scientist' ],
  [ 'location',
    { country: 'CY',
      city: 'Kozboud',
      address: '834 Wasaj Road',
      coordinates: [Object] } ] ]
 */
