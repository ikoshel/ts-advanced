import { Observer } from './Observer';
import { Task } from './Task';

export class User extends Observer {
    #activeTask?: Task;
    name: string;
    readonly id: string;

    constructor(name: string) {
        super();
        this.name = name;
        this.id = "id" + Math.random().toString(16).slice(2);
    }

    update(task: Task) {
        if (task.assigneeId === this.id) {
            this.#activeTask = task;
        }
    }

    get activeTask(): Task | undefined {
        return this.#activeTask;
    }
}