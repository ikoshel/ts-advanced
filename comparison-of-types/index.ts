// Task 1
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends Record<string, unknown> ? DeepReadonly<T[K]> : T[K];
}

// Task 2
type DeepRequireReadonly<T> = {
    readonly [K in keyof Required<T>]: Required<T>[K] extends Record<string, unknown>
        ? DeepRequireReadonly<Required<T>[K]> : Required<T>[K];
}

// Task 3

// Task 4
type TPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// Testing for new types
interface User {
    name: string;
    age: number;
    permission: string[];
}

type MyReadonlyUser = DeepReadonly<User>;
type MyDeepRequireReadonlyUser = DeepRequireReadonly<User>;
type MyPickUser = TPick<User, 'name' | 'age'>;