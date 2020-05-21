import { readFileSync, readFile } from 'fs'

// package.json 파일을 동기 방식으로 읽기
console.log('read package.json using synchronous api...')
const buffer: Buffer = readFileSync('../package.json')
console.log(buffer.toString())

// package.json 파일을 비동기 방식으로 읽기
readFile('../package.json', (error, buffer: Buffer) => {
  console.log('read package.json using asynchronous api...')
  console.log(buffer.toString())
})

// Promise와 async/await 구문을 사용하여 읽기
const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) =>
    readFile(filename, (error, buffer: Buffer) => {
      if (error) reject(error)
      else resolve(buffer.toString())
    })
  )

const readFileAsync = async () => {
  const content = await readFilePromise('../package.json')
  console.log('read package.json using Promise and async/await...')
  console.log(content)
}
readFileAsync()
