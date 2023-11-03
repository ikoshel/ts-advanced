class School {
    private static instance: School;
    private _areas: Map<string, Area> = new Map<string, Area>();
    private _lecturers: Map<string, Lecturer> = new Map<string, Lecturer>();

    private constructor() {}

    public static getInstance(): School {
        if (!School.instance) {
            School.instance = new School();
        }
        return School.instance;
    }

    addArea(area: Area): void {
        this._areas.set(area.name, area);
    }

    removeArea(areaName: string): void {
        this._areas.delete(areaName);
    }

    addLecturer(lecturer: Lecturer): void {
        this._lecturers.set(lecturer.name, lecturer);
    }

    removeLecturer(lecturerName: string): void {
        this._lecturers.delete(lecturerName);
    }
}

class Area {
    private _levels: Map<string, Level> = new Map<string, Level>();
    private readonly _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    addLevel(level: Level): void {
        this._levels.set(level.name, level);
    }

    removeLevel(levelName: string): void {
        this._levels.delete(levelName);
    }
}

class Level {
    private _groups: Map<string, Group> = new Map<string, Group>();
    private readonly _name: string;
    private readonly _description: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    addGroup(group: Group): void {
        this._groups.set(group.name, group);
    }

    removeGroup(groupName: string): void {
        this._groups.delete(groupName);
    }
}

class Group {
    private _students: Map<string, Student> = new Map<string, Student>();
    private readonly _name: string;
    private _directionName: string;
    private _levelName: string;

    constructor(name: string, directionName: string, levelName: string) {
        this._name = name;
        this._directionName = directionName;
        this._levelName = levelName;
    }

    get name(): string {
        return this._name;
    }

    addStudent(student: Student): void {
        this._students.set(student.fullName, student);
    }

    removeStudent(fullName: string): void {
        this._students.delete(fullName);
    }
}

class Student {
    private readonly _firstName: string;
    private readonly _lastName: string;
    private _grades: Map<string, number> = new Map<string, number>();
    private _visits: Map<number, boolean> = new Map<number, boolean>();
    private _birthYear: number;

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    setGrade(subject: string, grade: number): void {
        this._grades.set(subject, grade);
    }

    setVisit(visitNumber: number, attended: boolean): void {
        this._visits.set(visitNumber, attended);
    }
}

class Lecturer {
    private readonly _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}