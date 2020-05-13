class Person1 {
  name: string
  age?: number
}

let jack1: Person1 = new Person1()
console.log(jack1, jack1.name) // Person1 {} undefined
jack1.name = 'Jack'
jack1.age = 32
console.log(jack1) // Person1 { name: 'Jack', age: 32 }

class Person2 {
  constructor(public name: string, public age?: number) {}
}
let jack2: Person2 = new Person2('Jack', 32)
console.log(jack2) // Person2 { name: 'Jack', age: 32 }

class Person3 {
  name: string
  age?: number
  constructor(name: string, age?: number) {
    this.name = name
    this.age = age
  }
}
let jack3: Person3 = new Person3('Jack', 32)
console.log(jack3) // Person3 { name: 'Jack', age: 32 }

interface IPerson4 {
  name: string
  age?: number
}

class Person4 implements IPerson4 {
  constructor(public name: string, public sex: string, public age?: number) {}
}
let jack4 : IPerson4 = new Person4('Jack', 'Man', 32)
let jack4b : Person4 = new Person4('Jack', 'Man', 32)
console.log(jack4) // Person4 { name: 'Jack', sex: 'Man', age: 32 }
console.log(jack4b) // Person4 { name: 'Jack', sex: 'Man', age: 32 }
console.log(jack4 === jack4b) // false

abstract class AbstractPerson5 {
  abstract name: string
  constructor(public age?: number) {}
}

class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age)
  }
}
let jack5 : Person5 = new Person5('Jack', 32)
console.log(jack5) // Person5 { age: 32, name: 'Jack' }