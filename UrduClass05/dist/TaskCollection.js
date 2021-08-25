"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskColection = void 0;
const Task_1 = require("./Task");
class TaskColection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new Task_1.Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new Task_1.Task(this.nextId, task));
    }
    printAll() {
        this.tasks.forEach((item) => item.printTask());
    }
    taskDone(taskId) {
        let item = this.tasks.find((item) => item.taskID == taskId);
        item.done = true;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
}
exports.TaskColection = TaskColection;
