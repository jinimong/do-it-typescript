import * as R from 'ramda';
import { IPerson, makeRandomIPerson } from './model/person';
import { ILocation, makeRandomILocation } from './model/location';
import { ICoordinates, makeRandomICoordinates } from './model/coordinates';

const person: IPerson = makeRandomIPerson();
const location: ILocation = makeRandomILocation();
const coordinates: ICoordinates = makeRandomICoordinates();

const newLocation = R.mergeDeepRight(location, { coordinates });
const newPerson = R.mergeDeepRight(person, { location: newLocation });

console.log(person);
/**
{ name: 'Mark Gross',
  age: 56,
  title: 'Collections Manager',
  location:
   { country: 'ME',
     city: 'Wodemogi',
     address: '357 Ruto Terrace',
     coordinates: { latitude: 21.43179, longitude: -130.1196 } } }
 */

console.log(newPerson);
/**
{ name: 'Mark Gross',
  age: 56,
  title: 'Collections Manager',
  location:
   { country: 'GS',
     city: 'Guhewud',
     address: '93 Segruv Trail',
     coordinates: { latitude: 18.69955, longitude: -17.94158 } } }
 */
