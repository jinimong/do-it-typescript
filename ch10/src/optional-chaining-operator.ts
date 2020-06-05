export interface IPerson {
  name: string;
  age?: number;
}
let person: IPerson;
// console.log(person.name); // Cannot read property 'name' of undefined
console.log(person?.name); // undefined
