// Task 1
type DeepReadonly<T> = {
    readonly [key in keyof T]: DeepReadonly<T[key]>
}

// Task 2
type DeepRequiredReadonly<T> = {
    readonly [key in keyof T]-?: DeepRequiredReadonly<T[key]>
}

// Task 3
type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K]
}

// Task 4
type TPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

interface User {
    name: string;
    age: number;
    permission: string[];
}

type MyReadonlyUser = DeepReadonly<User>;
type MyDeepRequireReadonlyUser = DeepRequiredReadonly<User>;
type MyUpperCaseKeysUser = UpperCaseKeys<User>;
type MyPickUser = TPick<User, 'name' | 'age'>;