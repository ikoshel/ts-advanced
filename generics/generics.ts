/*
Написати функцію convertToString, яка може приймати аргумент будь якого типу та повертати його у вигляді строки (за допомогою методу toString). Якщо цього методу немає, тоді повертати undefined
 */

function convertToString<T>(arg: T): string | undefined {
    return (arg as any).toString ? (arg as any).toString() : undefined;
}

/*
Написати функцію sortEntities, яка має сортувати різні об'єкти, які мають id за зростанням або за зменшенням. Функція приймає 2 аргументи - масив об'єктів та ключове слово desc або asс, відповідно до нього буде відбуватися сортування.
 */

type Entity = { id: number, [key: string]: any };

function sortEntities<T extends Entity>(entities: T[], order: 'asc' | 'desc'): T[] {
    return entities.sort((a, b) => order === 'asc' ? a.id - b.id : b.id - a.id);
}