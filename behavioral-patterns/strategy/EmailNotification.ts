import { INotification } from './INotification';

export class EmailNotification implements INotification {
    notify(title: string): void {
        console.log(`EMAIL: task ${title} added to board`);
    }
}