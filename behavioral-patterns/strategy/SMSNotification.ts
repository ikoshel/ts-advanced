import { INotification } from './INotification';

export class SMSNotification implements INotification {
    notify(title: string): void {
        console.log(`SMS: task ${title} added to board`);
    }
}