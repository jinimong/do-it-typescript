import {arrayLength, isEmpty} from './arrayLength'
let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['Hello', 'World']

type Person = {name: string, age?: number}
let personArray: Person[] = [{name: 'Jack'}, {name: 'Jane', age: 32}]

console.log(
  arrayLength(numArray), // 3
  arrayLength(strArray), // 2
  arrayLength(personArray), // 2
  isEmpty([]), // true
  isEmpty([1]) // false
)