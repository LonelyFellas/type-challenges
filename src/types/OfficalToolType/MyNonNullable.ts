type MyNonNullable<T> = T & {}

type T00 = MyNonNullable<string | number | undefined>; // string | number
type T01 = MyNonNullable<string[] | null | undefined>; // string[]