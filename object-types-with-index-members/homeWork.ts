/*
-Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
-Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
-Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
-Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
-Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
-Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
 */

// Interface that uses an index signature of union types.
interface IIndexSignatureUnion {
    [key: string]: string | number;
}

// Interface where the values in the index signature are functions.
interface IStringFunctionMap {
    [key: string]: (...args: any[]) => any;
}

// Interface that uses an index signature to describe an array-like object.
interface IMyArrayLike {
    [index: number]: any;
}

/*
interface IMyArrayLike<T> {
  [index: number]: T;
}
 */

// Interface with specific properties and an index signature.
interface INamedObject {
    name: string;
    [key: string]: any;
}

// Two interfaces, the first with an index signature and the second extends the first one with specific properties.
interface IBase {
    [key: string]: any;
}

interface IExtended extends IBase {
    name: string;
}

// Function that takes an object with an index signature and checks if the values of certain keys meet certain criteria.
function checkValuesAreNumbers(map: { [key: string]: any } ): boolean {
    return Object.values(map).every(value => typeof value === 'number');
}