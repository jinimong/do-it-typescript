import * as R from 'ramda';

// R.trim
console.log(R.trim('\t hello \n')); // hello

// R.toUpper
console.log(R.toUpper('Hello')); // HELLO

// R.toLower
console.log(R.toLower('HELLO')); // hello

// R.split
const words: string[] = R.split(' ')(`Hello world!, I'm Peter.`);
console.log(words); // [ 'Hello', 'world!,', 'I\'m', 'Peter.' ]

// R.join
console.log(R.join('-')(words)); // Hello-world!,-I'm-Peter.
