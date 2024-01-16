interface INotification {
    notify(title: string): void;
}

class EmailNotification implements INotification {
    notify(title: string): void {
        console.log(`EMAIL: task ${title} added to board`);
    }
}

class TelegramNotification implements INotification {
    notify(title: string): void {
        console.log(`TELEGRAM: task ${title} added to board`);
    }
}

class SMSNotification implements INotification {
    notify(title: string): void {
        console.log(`SMS: task ${title} added to board`);
    }
}

class TaskBoardStrategy {
    #tasks: Task[] = [];
    #observers: User[] = [];
    #strategy: INotification;

    constructor(strategy: INotification) {
        this.#strategy = strategy;
    }

    get tasks() {
        return this.#tasks;
    }

    addTask(task: Task): void {
        this.#tasks.push(task);
        this.notify(task);
        this.#strategy.notify(task.title);
    }

    attach(observer: User) {
        this.#observers.push(observer);
    }

    setStrategy(strategy: INotification): void {
        this.#strategy = strategy;
    }

    notify(task: Task) {
        this.#observers.forEach(observer => {
            observer.update(task);
        });
    }
}