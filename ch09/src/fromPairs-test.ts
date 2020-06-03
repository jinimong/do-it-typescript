import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';

const pairs: [string, any][] = R.toPairs(makeRandomIPerson());
const person: IPerson = R.fromPairs(pairs) as IPerson;
console.log(person);

/**
{ name: 'Steve Hale',
  age: 44,
  title: 'Computer Programmer',
  location:
   { country: 'PH',
     city: 'Zuinrim',
     address: '1833 Wavnik Junction',
     coordinates: { latitude: -64.79312, longitude: 66.95447 } } }
 */
