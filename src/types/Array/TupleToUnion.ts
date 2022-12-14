/* _____________ 你的代码 _____________ */

type TupleToUnion<T extends any[]> = T extends [...infer A] ? A[number] : never;


/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
