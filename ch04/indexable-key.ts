export type KeyValueType = {
  [key: string]: string
}
export const makeObject = (key: string, value: string): KeyValueType => ({[key]: value})

console.log(makeObject('name', 'Jack')) // { name: 'Jack' }
console.log(makeObject('firstName', 'Jane')) // { firstName: 'Jane' }
console.log(makeObject('123', 'Jane')) // { '123': 'Jane' }

export type KeyValueType2 = {
  [key: number]: number
}
export const makeObject2 = (key: number, value: number): KeyValueType2 => ({[key]: value})

console.log(makeObject2(123, 456)) // { '123': '456' }