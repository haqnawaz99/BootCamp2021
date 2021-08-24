"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Musa Todo List");
const TaskCollection_1 = require("./TaskCollection");
let task01 = new TaskCollection_1.TaskColection();
task01.addTodo("Medicine");
console.clear();
task01.printAll();
