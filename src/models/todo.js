export default class Todo {
    constructor(task, priority, id) {
        this.task = task;
        this.priority = priority;
        this.id = id.toString();
        this.start = new Date();
    }
}