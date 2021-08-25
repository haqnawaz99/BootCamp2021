
console.log("Musa Todo List");
import { Task } from "./Task";
import { TaskColection } from "./TaskCollection";

let task01: TaskColection = new TaskColection();
task01.addTodo("Medicine");
task01.addTodo("School");
console.clear();
task01.printAll();
task01.taskDone(2);
task01.printAll();
task01.addTodo("Laptop");
task01.getTodoById(3);