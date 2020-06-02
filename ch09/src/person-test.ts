import { IPerson, makeRandomIPerson } from './model/person';

const person: IPerson = makeRandomIPerson();
console.log(person);
/**
{ name: 'Steven Ball',
  age: 37,
  title: 'Accountant',
  location:
   { country: 'CG',
     city: 'Iwurovij',
     address: '938 Awipu Drive',
     coordinates: { latitude: 72.73358, longitude: 112.89173 } } }
 */
