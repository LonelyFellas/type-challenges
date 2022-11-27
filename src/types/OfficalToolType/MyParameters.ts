
type MyParameter<T extends (...arg: any) => any> = T extends (...arg: infer A) => any ? A  : never;


declare function f1(arg: { a: number; b: string }): void;

type T10 = MyParameter<() => string>;
//    []
type T11 = MyParameter<(s: string) => void>;
//    [s: string]
type T12 = MyParameter<<T>(arg: T) => T>;
//    [arg: unknown]
type T13 = MyParameter<typeof f1>;
//    [arg: { a: number; b: string; }]
type T14 = MyParameter<any>;
//    unknown[]
type T15 = MyParameter<never>;
//    never
