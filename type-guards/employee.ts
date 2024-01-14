// enum Status {
//     ACTIVE,
//     INACTIVE,
//     ONUNPAIDLEAVE
// }
//
// interface IPaymentInfo {
//     salary: number;
//     bankAccount: string;
// }
//
// class Employee {
//     private readonly _name: string;
//     private readonly _surname: string;
//     private readonly _paymentInfo: IPaymentInfo;
//     private _status: Status;
//
//     constructor(name: string, surname: string, paymentInfo: IPaymentInfo, status: Status = Status.ACTIVE) {
//         this._name = name;
//         this._surname = surname;
//         this._paymentInfo = paymentInfo;
//         this._status = status;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     get surname(): string {
//         return this._surname;
//     }
//
//     get paymentInfo(): IPaymentInfo {
//         return this._paymentInfo;
//     }
//
//     get status(): Status {
//         return this._status;
//     }
//
//     set status(status: Status) {
//         this._status = status;
//     }
// }