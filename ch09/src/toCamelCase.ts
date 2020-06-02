import * as R from 'ramda';

type StringToStringFunc = (string) => string;
export const toCamelCase = (delim: string): StringToStringFunc => {
  const makeFirstToCapital = (word: string) => {
    const characters = word.split('');
    return characters
      .map((c, index) => (index == 0 ? c.toUpperCase() : c))
      .join('');
  };

  // R.map 의 콜백함수에 index 매개변수 제공
  const indexedMap = R.addIndex(R.map);
  return R.pipe(
    R.trim, // 앞뒤 공백 제거
    R.split(delim), // delim 문자열을 구분자로 배열로 전환
    R.map(R.toLower), // 배열에 있는 모든 문자열을 소문자로 전환
    indexedMap((value: string, index: number) =>
      index > 0 ? makeFirstToCapital(value) : value
    ),
    R.join('')
  ) as StringToStringFunc;
};

console.log(
  toCamelCase(' ')('Hello world'), // helloWorld
  toCamelCase('_')('Hello_Albert_einstein') // helloAlbertEinstein
);
