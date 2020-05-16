// 명령형 프로그래밍 예시
let sum = 0
for(let val = 1; val <= 100; val++)
  sum += val
console.log(sum) // 5050

// 선언형 프로그래밍 예시
import range from './range'
import fold from './fold'

let numbers: number[] = range(1, 100 + 1)
let result = fold(numbers, (result, value) => result + value, 0)
console.log(result) // 5050