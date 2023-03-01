
/* _____________ 你的代码 _____________ */
type WhiteSpace= ' ' | '\t' | '\n';
type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer T}` ? TrimLeft<T> : S;

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<TrimLeft<'str'>, 'str'>>,
    Expect<Equal<TrimLeft<' str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
    Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
    Expect<Equal<TrimLeft<''>, ''>>,
    Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]

