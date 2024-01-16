import { Observable } from './Observable';
import { Task } from './Task';

export class TaskBoard extends Observable {
    #tasks: Task[] = [];

    get tasks() {
        return this.#tasks;
    }

    addTask(task: Task): void {
        this.#tasks.push(task);
        this.notify(task);
    }
}