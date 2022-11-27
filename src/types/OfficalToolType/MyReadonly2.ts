/* _____________ 你的代码 _____________ */
type MyReadonly2<T, K extends keyof T = keyof T> = {
    -readonly [P in MyExclude<keyof T, K>]: T[P]
} & {
    +readonly [Q in K]: T[Q]
}


/* _____________ 测试用例 _____________ */
import type { Alike, Expect } from '@type-challenges/utils'
import { MyExclude } from './MyExclude';

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
