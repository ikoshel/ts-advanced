class Department {
    private readonly _name: string;
    private readonly _domain: string;
    private _employees: Employee[] = [];
    private readonly _budget: {
        debit: number;
        credit: number;
    };

    constructor(name: string, domain: string, debit = 0, credit = 0) {
        this._name = name;
        this._domain = domain;
        this._budget = {
            debit: debit,
            credit: credit
        };
    }

    get name(): string {
        return this._name;
    }

    get domain(): string {
        return this._domain;
    }

    get employees(): Employee[] {
        return this._employees;
    }

    get budget(): { debit: number; credit: number; } {
        return this._budget;
    }

    balance(): number {
        return this._budget.debit - this._budget.credit;
    }

    addEmployee(employee: Employee): void {
        this._employees.push(employee);
    }

    removeEmployee(employee: Employee): void {
        const index = this._employees.indexOf(employee);
        if (index > -1) {
            this._employees.splice(index, 1);
        }
    }
}