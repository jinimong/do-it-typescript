import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';

const person: IPerson = makeRandomIPerson();

const keys: string[] = R.keys(person);
console.log(keys); // [ 'name', 'age', 'title', 'location' ]

const values: any[] = R.values(person);
console.log(values);
/**
[ 'Bernice Hicks',
  29,
  'Marine Biologist',
  { country: 'AO',
    city: 'Nozbezwu',
    address: '973 Zife Pike',
    coordinates: { latitude: -65.7036, longitude: 111.7723 } } ]
 */

const zippedPerson: IPerson = R.zipObj(keys, values) as IPerson;
console.log(zippedPerson);
/**
{ name: 'Bernice Hicks',
  age: 29,
  title: 'Marine Biologist',
  location:
   { country: 'AO',
     city: 'Nozbezwu',
     address: '973 Zife Pike',
     coordinates: { latitude: -65.7036, longitude: 111.7723 } } }
 */
