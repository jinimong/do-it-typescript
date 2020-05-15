let array2: number[] = [1, 2, 3, 4, 5]
let [first, second, third, ...rest] = array2
console.log(first, second, third, rest) // 1 2 3 [ 4, 5 ]