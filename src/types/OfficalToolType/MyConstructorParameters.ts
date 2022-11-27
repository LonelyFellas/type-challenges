// type T0 = ConstructorParameters<ErrorConstructor>;
// //    [message?: string | undefined]
// type T1 = ConstructorParameters<FunctionConstructor>;
// //    string[]
// type T2 = ConstructorParameters<RegExpConstructor>;
// //    [pattern: string | RegExp, flags?: string | undefined]
// type T3 = ConstructorParameters<any>;
// //   unknown[]

// type T4 = ConstructorParameters<Function>;
// //    never
// // Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
