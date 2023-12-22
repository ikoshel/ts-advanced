class Company {
    private _name: string;
    private _departments: Department[] = [];
    private _previouslyHired: Employee[] = [];
    private _staff: Employee[] = [];

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get departments(): Department[] {
        return this._departments;
    }

    get previouslyHired(): Employee[] {
        return this._previouslyHired;
    }

    get staff(): Employee[] {
        return this._staff;
    }

    addDepartment(department: Department): void {
        this._departments.push(department);
    }
}