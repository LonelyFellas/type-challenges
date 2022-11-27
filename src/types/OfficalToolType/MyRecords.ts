

export type MyRecord<T extends (string | number | symbol), U> = {
    [P in T] : U
}


// 测试

type Methods = 'get' | 'put' | 'delete' | 'post' | 'patch'
type TitleStr = {
    title: string
}
type MethodsType1 = MyRecord<Methods, TitleStr>