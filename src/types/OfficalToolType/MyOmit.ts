/* _____________ 你的代码 _____________ */
import { MyExclude } from "./MyExclude"
type MyOmit<T, K extends string | number | symbol> = {
    [P in MyExclude<keyof T, K>]: T[P];
}

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, Omit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}