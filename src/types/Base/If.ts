/* _____________ 你的代码 _____________ */

export type If<C extends boolean, T, F> = C extends true ? T : F;



/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

type error = If<null, 'a', 'b'>