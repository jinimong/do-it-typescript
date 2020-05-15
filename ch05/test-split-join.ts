import {split, join} from './split-join'
console.log(
  split('hello'),
  split('h_e_l_l_o', '_')
) // [ 'h', 'e', 'l', 'l', 'o' ] [ 'h', 'e', 'l', 'l', 'o' ]

console.log(
  join(['h', 'e', 'l', 'l', 'o']),
  join(['h', 'e', 'l', 'l', 'o'], '_'),
) // hello h_e_l_l_o
