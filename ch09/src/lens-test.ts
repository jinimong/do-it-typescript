import * as R from 'ramda';
import { makeLens, getter, setter, setterUsingFunc } from './lens';
import { IPerson, makeRandomIPerson } from './model/person';

const nameLens = makeLens('name');
const getName = getter(nameLens);
const setName = setter(nameLens);
const setNameUsingFunc = setterUsingFunc(nameLens);

const person: IPerson = makeRandomIPerson();

const name = getName(person);
const newPerson = setName('Albert Einstein')(person);
const anotherPerson = setNameUsingFunc((name) => `'Mr. ${name}'`)(person);
const capitalPerson = setNameUsingFunc(R.toUpper)(person);

console.log(
  name, // May Fox
  getName(newPerson), // Albert Einstein
  getName(anotherPerson), // 'Mr. May Fox'
  getName(capitalPerson) // MAY FOX
);
