"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(taskID, task, done = false) {
        this.taskID = taskID;
        this.task = task;
        this.done = done;
    }
    printTask() {
        console.log(`The  id is ${this.task} \n
    The  task is ${this.taskID} \n
    The  completed is ${this.done} \n`);
    }
}
exports.Task = Task;
