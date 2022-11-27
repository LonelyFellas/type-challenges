export type MyInclude<T, U> = T extends U ? T : never;

type T0 = MyInclude<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T1 = MyInclude<string | number | (() => void), Function>; // () => void
