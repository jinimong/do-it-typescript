// for in
let names = ['Jack', 'Jane', 'Steve']

for(let index in names) {
  const name = names[index]
  console.log(`[${index}]: ${name}`)
}
// [0]: Jack
// [1]: Jane
// [2]: Steve

// object for in 
let jack = {name: 'Jack', age: 32}
for(let property in jack)
  console.log(`${property}: ${jack[property]}`)
// name: Jack
// age: 32

// for of
for(let name of names)
  console.log(name)
// Jack
// Jane
// Steve