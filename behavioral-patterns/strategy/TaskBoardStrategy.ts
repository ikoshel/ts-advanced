import { INotification } from './INotification';
import { Observable } from '../observer/Observable';
import { Task } from '../observer/Task';

export class TaskBoardStrategy extends Observable {
    #tasks: Task[] = [];
    #strategy: INotification;

    constructor(strategy: INotification) {
        super();
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

    setStrategy(strategy: INotification): void {
        this.#strategy = strategy;
    }
}