// that 쓰지 않고 오브젝트 내부에서 this 활용하기

export default class NotUseThatIterable {
  constructor(public from: number, public to: number) {}
  [Symbol.iterator]() {
    let currentValue = this.from
    return {
      next: () => {
        const value = currentValue < this.to ? currentValue++ : undefined
        const done = value === undefined
        return { value, done }
      },
    }
  }
}

const iterator = new NotUseThatIterable(1, 5 + 1)
for (let value of iterator) {
  console.log(value)
}
