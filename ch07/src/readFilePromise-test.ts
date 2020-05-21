import { readFilePromise } from './readFilePromise'

readFilePromise('../package.json')
  .then((content: string) => {
    console.log(content)
    return readFilePromise('../tsconfig.json')
  })
  .then((content: string) => {
    console.log(content)
    return readFilePromise('.') // error: EISDIR: illegal operation on a directory, read
  })
  .catch((err: Error) => console.log('error:', err.message))
  .finally(() => console.log('프로그램 종료'))
