import range from './range'

const multiply = (result, val) => result * val

let numbers: number[] = range(1, 10 + 1)
let tempResult = numbers
    .filter(val => val % 2 != 0)
    .map(val => val * val)
    .reduce(multiply, 1)
let result = Math.round(Math.sqrt(tempResult))
console.log(result) // 945