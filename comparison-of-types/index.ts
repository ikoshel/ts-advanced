// Task 1
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends Record<string, unknown> ? DeepReadonly<T[K]> : T[K];
}

// Task 2
type DeepRequireReadonly<T> = {
    readonly [K in keyof Required<T>]: Required<T>[K] extends Record<string, unknown>
        ? DeepRequireReadonly<Required<T>[K]>: Required<T>[K];
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
type MyDeepRequireReadonlyUser = DeepRequireReadonly<User>;
type MyUpperCaseKeysUser = UpperCaseKeys<User>;
type MyPickUser = TPick<User, 'name' | 'age'>;