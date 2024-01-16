import { Observer } from './Observer';
import { Task } from './Task';

export abstract class Observable {
    #observers: Observer[] = [];

    attach(observer: Observer) {
        this.#observers.push(observer);
    }

    notify(task: Task) {
        this.#observers.forEach(observer => {
            observer.update(task);
        });
    }
}