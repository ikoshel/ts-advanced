import { Task } from './Task';

export abstract class Observer {
    abstract update(task: Task): void;
}