import { INotification } from './INotification';

export class TelegramNotification implements INotification {
    notify(title: string): void {
        console.log(`TELEGRAM: task ${title} added to board`);
    }
}