import { pick, pickUseType } from './pick';

const obj = { name: 'Jane', age: 22, city: 'Seoul', country: 'Korea' };

// 오타로 생기는 문제를 런타임에 알 수 있음
console.log(
  pick(obj, ['name', 'age']), // { name: 'Jane', age: 22 }
  pick(obj, ['nam', 'agee']) // { nam: undefined, agee: undefined }
);

// 코드 작성 시점에 에러 탐지 가능
console.log(pickUseType(obj, ['name', 'age'])); // { name: 'Jane', age: 22 }
// console.log(pickUseType(obj, ['name', 'age'])); // 입력 오류
