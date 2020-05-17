// deep copy
let original = 1
let copied = original
copied += 2
console.log(original, copied) // 1 3

// shallow copy
const originalArray = [5, 3, 9, 7]
const swallowCopiedArray = originalArray
swallowCopiedArray[0] = 0
console.log(originalArray, swallowCopiedArray) // [ 0, 3, 9, 7 ] [ 0, 3, 9, 7 ]

// deep copy by spread operator
const oArray = [1, 2, 3, 4]
const deepCopiedArray = [...oArray]
deepCopiedArray[0] = 0
console.log(oArray, deepCopiedArray) // [ 1, 2, 3, 4 ] [ 0, 2, 3, 4 ]