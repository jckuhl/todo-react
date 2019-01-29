export default class Todo {
    constructor(task, priority, id) {
        this.task = task;
        this.priority = priority;
        this.id = id;
        this.done = false;
        this.start = new Date();
    }
}