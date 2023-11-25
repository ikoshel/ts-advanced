class Accounting extends Department {
    private _balance: number = 0;

    calculateBalance(): void {
        this._balance = this.budget.debit - this.budget.credit;
    }

    processPayroll(): void {
        const activeEmployees = this.employees.filter(e => e.status === Status.ACTIVE);
        activeEmployees.forEach(e => this._balance -= e.paymentInfo.salary);
    }

    paySalaries(): void {
        this.employees.forEach(employee => {
            if (employee.status === Status.ACTIVE) {
                this.budget.debit -= employee.paymentInfo.salary;
            }
        });
    }
}