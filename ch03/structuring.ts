import {IPerson, ICompany} from './IPerson_ICompany'

let jack: IPerson = {name: 'Jack', age: 32},
    jane: IPerson = {name: 'Jane', age: 32}

let apple: ICompany = {name: 'Apple Computer, Inc', age: 43},
    ms: ICompany = {name: 'Microsoft', age: 44}

console.log(jack, jane) // { name: 'Jack', age: 32 } { name: 'Jane', age: 32 }
console.log(apple, ms) // { name: 'Apple Computer, Inc', age: 43 } { name: 'Microsoft', age: 44 }