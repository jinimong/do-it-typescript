import { random, gen } from './yield-return'
const iter = gen()
while (true) {
  const { value, done } = iter.next(random(10, 1))
  if (done) break
  console.log(value)
}
// you select 0
// you select 5
// you select 2
// you select 7
// you select 6
