class Task {
    constructor(
        public title: string,
        public description: string,
        public assigneeId: string
    ) {
    }
}

class TaskBoard {
    #tasks: Task[] = [];
    #observers: User[] = [];

    get tasks() {
        return this.#tasks;
    }

    addTask(task: Task): void {
        this.#tasks.push(task);
        this.notify(task);
    }

    attach(observer: User) {
        this.#observers.push(observer);
    }

    notify(task: Task) {
        this.#observers.forEach(observer => {
            observer.update(task);
        });
    }
}

class User {
    #activeTask?: Task;
    name: string;
    readonly id: string;

    constructor(name: string) {
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