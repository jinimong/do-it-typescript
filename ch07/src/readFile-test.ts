import { readFile } from 'fs'

readFile('../package.json', (err, buffer: Buffer) => {
  if (err) throw err
  else {
    const content: string = buffer.toString()
    console.log(content)
  }
})
